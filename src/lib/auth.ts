import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { credentialValidator } from "./validators/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { CustomError } from "./customError";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const { email, password } = credentialValidator.parse(credentials);

        const user = await db.user.findFirst({
          where: {
            email,
          },
        });

        if (!user || !user.password)
          throw new CustomError({
            name: "Unauthorized",
            message: "User does not exist",
            status: 400,
          });

        // Compare user passowrd
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
          throw new CustomError({
            name: "Unauthorized",
            message:
              "Incorrect Password entered, Please put in the correct password",
            status: 401,
          });
        }

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
        type: dbUser.type,
        accountBalance: dbUser.accountBalance,
        agentBonus: dbUser.agentBonus,
      };
    },

    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.type = token.type;
      }

      return session;
    },

    redirect() {
      return `${process.env.NEXTAUTH_URL}/dashboard`;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

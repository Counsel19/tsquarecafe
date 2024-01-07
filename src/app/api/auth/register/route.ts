import { db } from "@/lib/db";
import { registerCredentialValidator } from "@/lib/validators/credentials";
import axios from "axios";
import bcrypt from "bcrypt";
import { z } from "zod";
import crypto from "crypto";

const getAvatar = async (hash: string) => {
  const defaultImage = "identicon";
  try {
    const res = await axios.get(
      `https://www.gravatar.com/avatar/${hash}"?d=${defaultImage}`
    );
    if (res.data) {
      console.log(res.data);
      return res.data as string;
    } else {
      return "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg";
    }
  } catch (error) {
    console.log(error);
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password, firstname, lastname } =
      registerCredentialValidator.parse(body);

    const isExist = await db.user.findFirst({
      where: { email },
    });

    if (isExist) return new Response("User already exists", { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedEmail = crypto.createHash("md5").update(email).digest("hex");

    const avatar = await getAvatar(hashedEmail);

    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name: `${firstname} ${lastname}`,
        image:
          avatar ||
          "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
      },
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("invalid Request Data, Ensure Email is Valid", {
        status: 422,
      });
    }

    return new Response("Could not register user, please try again", {
      status: 500,
    });
  }
}

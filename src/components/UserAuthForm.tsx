"use client";
import { useState } from "react";
import Link from "next/link";
import { FC } from "react";
import { Input } from "./ui/Input";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

interface UserAuthFormProps {}
const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoadingEmail, setIsLoadingEmail] = useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false);

  const loginWithEmail = async () => {
    setIsLoadingEmail(true);
    try {
    } catch (error) {
      toast({
        title: "Error Login in",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoadingEmail(false);
    }
  };
  const loginWithGoogle = async () => {
    setIsLoadingGoogle(true);
    try {
      await signIn(`google`);
    } catch (error) {
      toast({
        title: "Error Login in",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  return (
    <div>
      <form className="mt-6 flex flex-col space-y-3">
        <div>
          <label className="block text-gray-700 text-sm pb-2">
            Email Address
          </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-sm pb-2">Password</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="text-right mt-2">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-700 hover:text-zinc-700 focus:text-zinc-700 underline underline-offset-3"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          onClick={loginWithEmail}
          isLoading={isLoadingEmail}
          size="sm"
          className="w-full"
        >
          Sign In
        </Button>
      </form>

      <hr className="my-6 border-gray-300 w-full" />

      <Button
        isLoading={isLoadingGoogle}
        onClick={loginWithGoogle}
        className="w-full"
      >
        {isLoadingGoogle ? null : <Icons.google className="h-4 w-4 mr-2" />}
        <span className="ml-4">Log in with Google</span>
      </Button>
    </div>
  );
};

export default UserAuthForm;

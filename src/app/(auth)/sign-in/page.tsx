import SignIn from "@/components/SignIn";
import { FC } from "react";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <SignIn />
    </div>
  );
};

export default page;

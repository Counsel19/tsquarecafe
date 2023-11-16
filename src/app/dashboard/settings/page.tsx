import LabledInput from "@/components/LabledInput";
import UpdatePassword from "@/components/UpdatePassword";
import UpdateProfile from "@/components/UpdateProfile";
import { FC } from "react";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="my-2">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 bg-white rounded-lg p-4">
          <UpdateProfile />
        </div>
        <div className="col-span-1 bg-white rounded-lg p-4">
          <UpdatePassword />
        </div>
      </div>
    </div>
  );
};

export default page;

import { FC } from "react";
import UserAccountNav from "./UserAccountNav";
import { getAuthSession } from "@/lib/auth";

const Header = async ({}) => {
  const session = await getAuthSession();

  return (
    <div className="grid grid-cols-[1fr_280px] gap-2 items-center w-full">
      <div className="w-full h-16 bg-white rounded-lg p-4 font-semibold flex items-center">
        Welcome to your Dashboard
      </div>

      <div className="h-16 bg-white rounded-lg p-4 flex item-center justify-between">
        <div className="flex flex-col">
          <h4 className="text-medium text-xs mb-0">{session?.user.name}</h4>
          <span className="text-xs text-zinc-500">{session?.user.email}</span>
        </div>
        {session?.user && <UserAccountNav user={session?.user} />}
      </div>
    </div>
  );
};

export default Header;

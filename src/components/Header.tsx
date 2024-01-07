"use client";

import UserAccountNav from "./UserAccountNav";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const Header = ({}) => {
  const { user } = useSelector((store: RootState) => store.user);

  return (
    <div className="grid grid-cols-[1fr_280px] gap-2 items-center w-full">
      <div className="w-full h-16 bg-white rounded-lg p-4  flex justify-between items-center">
        <span className="font-semibold"> Welcome to your Dashboard</span>

        <div className="text-sm flex items-center font-semibold gap-3 rounded-lg bg-slate-200 ">
          <button className="bg-emerald-900 h-full p-2 text-xs  rounded-lg text-white">
            Claim Agent Bonus: {user ? user.agentBonus : 0}
          </button>

          <div className="m-2 mr-4">{user ? user.accountBalance : 0}</div>
        </div>
      </div>

      <div className="h-16 bg-white rounded-lg p-4 flex item-center justify-between">
        <div className="flex flex-col">
          <h4 className="text-medium text-xs mb-0">{user?.name}</h4>
          <span className="text-xs text-zinc-500">{user?.email}</span>
        </div>
        {user && <UserAccountNav user={user} />}
      </div>
    </div>
  );
};

export default Header;

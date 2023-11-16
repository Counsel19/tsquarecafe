import { FC } from "react";
import UserAvatar from "./UserAvatar";
import { getAuthSession } from "@/lib/auth";

const UserProfileCard = async ({}) => {
  const session = await getAuthSession();

  return (
    <div className="w-full h-full p-4 rounded-lg bg-white">
      <div className="flex flex-col items-center justify-center gap-2 text-sm">
        <div className="h-20 w-20 flex items-center justify-center rounded-full border border-white shadow-lg">
          {session && <UserAvatar user={session?.user} />}
        </div>

        <h4 className="font-medium">{session?.user.name}</h4>
        <h4 className="text-gray-500">{session?.user.email}</h4>
        <div className="text-cyan-500">customer</div>
      </div>
    </div>
  );
};

export default UserProfileCard;

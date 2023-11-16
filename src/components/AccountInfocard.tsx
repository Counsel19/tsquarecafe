import { FC } from "react";
import { Button, buttonVariants } from "./ui/Button";
import { Banknote, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

interface AccountInfocardProps {
  isDisplayedFromWallet?: boolean;
}
const AccountInfocard: FC<AccountInfocardProps> = ({
  isDisplayedFromWallet,
}) => {
  return (
    <div className="py-6 px-8 space-y-4 bg-white rounded-lg w-full h-full">
      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="bg-emerald-500 p-4 w-14 h-14 rounded-lg flex items-center justify-center">
            <Banknote className="h-8 w-8 text-white" />
          </div>

          <Link
            href="/"
            className={`${buttonVariants({
              variant: "ghost",
            })} text-xs flex items-center `}
          >
            Top Up History
            <ChevronRight className="ml-2 h-4 w-4 " />
          </Link>
        </div>

        <div className="flex justify-between">
          <div>
            <h4 className="text-4xl font-bold">40000</h4>
            <p className="text-zinc-500 text-xs">Your Current Balance</p>
          </div>

          {!isDisplayedFromWallet && (
            <Button className=" bg-slate-900 flex items-center gap-3">
              <Plus className="h-4 w-4" />
              Top up Balance
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfocard;

import AccountInfocard from "@/components/AccountInfocard";
import Anouncement from "@/components/Anouncement";
import PaymentHistory from "@/components/PaymentHistory";
import RecentTransactions from "@/components/RecentTransactions";
import ReportCard from "@/components/ReportCard";
import ServiceCards from "@/components/ServiceCards";
import UserProfileCard from "@/components/UserProfileCard";
import { FC } from "react";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="mt-2 grid grid-cols-[1fr_280px] gap-2 ">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="col-span-1">
            <UserProfileCard />
          </div>
          <div className="col-span-2">
            <AccountInfocard />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <ServiceCards />
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <RecentTransactions />
        </div>
      </div>

      <div className="space-y-2 grid grid-rows-1">
        <ReportCard />
        <Anouncement
          title="Announcement for you"
          description="Always endeavour to check your announcement card to get latest information from the adminiatrators desk"
        />
        <PaymentHistory />
      </div>
    </div>
  );
};

export default page;

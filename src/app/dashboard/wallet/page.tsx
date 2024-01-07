import AccountInfocard from "@/components/AccountInfocard";
import AccountNumberCards from "@/components/AccountNumberCards";
import Anouncement from "@/components/Anouncement";
import PaymentHistory from "@/components/PaymentHistory";
import PendingPayment from "@/components/PendingPayment";
import TopUpForm from "@/components/TopUpForm";
import { FC } from "react";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <div className="mt-2 grid grid-cols-[1fr_280px] gap-2 ">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            <AccountInfocard isDisplayedFromWallet />

            <Anouncement
              fromWallet
              title="Current Price Per Unit: N200"
              description="Your Units are what your use to perform transactions on the platform. You can Purchase units by initiating a purchase and then following the subsequent instructions"
            />
          </div>

          <TopUpForm />
        </div>

        <div className="grid grid-rows-1">
          <PendingPayment />
        </div>
      </div>
      <AccountNumberCards />
    </div>
  );
};

export default page;

import { CheckCircle, CreditCard } from "lucide-react";
import { FC } from "react";
import SinglePaymentHistory from "./SinglePaymentHistory";

interface PaymentHistoryProps {}
const PaymentHistory: FC<PaymentHistoryProps> = ({}) => {
  return (
    <div className="bg-white p-4 rounded-lg w-full text-sm">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Top up</h3>
          <CreditCard className="h-4 w-4" />
        </div>

        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <div className="bg-emerald-500 h-10 w-10 flex items-center justify-center text-center text-white p-2 rounded">
              N
            </div>
            <span className="font-semibold text-xl"> 12000</span>
          </div>
          <p className="text-xs  text-zinc-500 ">
            Total Amount of units bought
          </p>
        </div>
        <div className="space-y-3 ">
          <h4 className="text-sm font-semibold">Top Up History</h4>
          <div className="flex flex-col gap-8 p-2 bg-slate-100 rounded-md">
            <SinglePaymentHistory
              dateTime={new Date()}
              status="Success"
              amount={1000}
            />
            <SinglePaymentHistory
              dateTime={new Date()}
              status="Pending"
              amount={1000}
            />
            <SinglePaymentHistory
              dateTime={new Date()}
              status="Canceled"
              amount={1000}
            />
            <SinglePaymentHistory
              dateTime={new Date()}
              status="Success"
              amount={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

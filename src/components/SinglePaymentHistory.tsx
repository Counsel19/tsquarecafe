import { CheckCircle, CircleOff, PauseCircle } from "lucide-react";
import { FC } from "react";
import { format } from "date-fns";

interface SinglePaymentHistoryProps {
  dateTime: Date;
  status: string;
  amount: number;
}
const SinglePaymentHistory: FC<SinglePaymentHistoryProps> = ({
  dateTime,
  status,
  amount,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 text-xs">
      {status == "Success" ? (
        <CheckCircle className="h-4 w-4 text-emerald-500" />
      ) : status == "Pending" ? (
        <PauseCircle className="h-4 w-4 text-yellow-600" />
      ) : (
        <CircleOff className="h-4 w-4 text-rose-500" />
      )}

      <span>{format(dateTime, "k:m:s bbb")}</span>

      <span
        className={
          status == "Success"
            ? "text-emerald-500"
            : status == "Pending"
            ? "text-yellow-600"
            : "text-rose-500"
        }
      >
        {status}
      </span>
      <span className="font-semibold">{amount}</span>
    </div>
  );
};

export default SinglePaymentHistory;

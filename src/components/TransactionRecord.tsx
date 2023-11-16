import { FC } from "react";
import { format } from "date-fns";
import { CalendarDays, Clock12 } from "lucide-react";

interface TransactionRecordProps {}
const TransactionRecord: FC<TransactionRecordProps> = ({}) => {
  const date = new Date();

  return (
    <div className="flex justify-between p-2 rounded-lg items-center text-sm bg-slate-100">
      <h5 className="">NIN Verification</h5>
      <span>ID</span>
      <div className="flex gap-2 items-center text-xs">
        <CalendarDays className="h-4 w-4" />
        {format(date, "eo LLL")}
      </div>
      <div className="flex gap-2 items-center text-xs">
        <Clock12 className="h-4 w-4" />
        {format(date, "eo LLL")}
      </div>

      <div className="p-2 text-xs font-semibold rounded-xl bg-teal-600 text-white flex items-center justify-center">
        Completed
      </div>
    </div>
  );
};

export default TransactionRecord;

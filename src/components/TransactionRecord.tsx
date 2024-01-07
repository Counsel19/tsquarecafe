import { FC } from "react";
import { format, parseISO } from "date-fns";
import { CalendarDays, Clock12 } from "lucide-react";
import { Transaction } from "@prisma/client";

interface TransactionRecordProps extends Transaction {}

const TransactionRecord: FC<TransactionRecordProps> = ({
  id,
  createdAt,
  price,
  slipId,
  status,
  type,
  reference,
}) => {
  console.log(createdAt, "createdAt");
  const parsedDate = parseISO(`${createdAt}`);

  return (
    <div className="flex justify-between p-2 rounded-lg items-center text-sm bg-slate-100">
      <h5 className="">{type}</h5>
      <span>{reference || id}</span>
      <div className="flex gap-2 items-center text-xs">
        <CalendarDays className="h-4 w-4" />
        {format(parsedDate, "eo LLL")}
      </div>
      <div className="flex gap-2 items-center text-xs">
        <Clock12 className="h-4 w-4" />
        {format(parsedDate, "HH : mm : ss")}
      </div>

      <div
        className={`p-2 text-xs  rounded-xl ${
          status === "SUCCESS"
            ? "bg-teal-600"
            : status === "PENDING"
            ? "bg-yellow-600"
            : "bg-rose-600"
        }  text-white flex items-center justify-center`}
      >
        {status.toLowerCase()}
      </div>
    </div>
  );
};

export default TransactionRecord;

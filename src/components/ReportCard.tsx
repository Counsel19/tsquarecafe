import { CheckCheck, Sigma, ThumbsDown } from "lucide-react";
import { FC } from "react";
import MiniValidationReportCard from "./MiniValidationReportCard";

interface ReportCardProps {}
const ReportCard: FC<ReportCardProps> = ({}) => {
  return (
    <div className="bg-white p-4 rounded-lg ">
      <h3 className=" text-sm font-semibold mb-3 ">Verification Summary</h3>
      <div className="flex flex-col space-y-3">
        <MiniValidationReportCard
          Icon={<Sigma className="h-5 w-5 text-emerald-700" />}
          title="Total Verifications"
          name="total"
        />
        <hr />

        <MiniValidationReportCard
          Icon={<CheckCheck className="h-5 w-5 text-teal-700" />}
          title="Successfull Verifications"
          name="success"
        />
        <hr />
        <MiniValidationReportCard
          Icon={<ThumbsDown className="h-5 w-5 text-rose-700" />}
          title="Failed Verifications"
          name="failed"
        />
      </div>
    </div>
  );
};

export default ReportCard;

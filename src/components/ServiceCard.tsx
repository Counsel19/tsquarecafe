import { Ban, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface ServiceCardProps {
  isServiecAvailable?: boolean;
  title: string;
  description: string;
  displayedFromHome?: boolean;
}
const ServiceCard: FC<ServiceCardProps> = ({
  isServiecAvailable,
  title,
  description,
  displayedFromHome,
}) => {
  return (
    <Link
      href="/"
      className={`bg-white block p-4 rounded-lg h-[220px] ${
        displayedFromHome && "border-slate-900 border-[1px]"
      }`}
    >
      <div className="flex flex-col gap-10 ">
        {!displayedFromHome && (
          <div
            className={`flex gap-1 ${
              isServiecAvailable ? "bg-emerald-100 " : "bg-rose-100 "
            } rounded-xl w-fit p-2`}
          >
            {isServiecAvailable ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <Ban className="h-4 w-4" />
            )}

            <span className="text-[10px] text-zinc-500 font-semibold">
              {isServiecAvailable ? "Service Avilable" : "Service Unavialable"}
            </span>
          </div>
        )}
        <div className="space-y-3 h-full">
          <h1 className="text-xl h-full font-semibold leading-9">{title}</h1>

          <p className="text-xs font-semibold text-zinc-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

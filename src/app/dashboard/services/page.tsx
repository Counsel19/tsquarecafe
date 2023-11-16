import ServiceCards from "@/components/ServiceCards";
import { FC } from "react";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="py-2 ">
      <div className="m-4">
        <h2 className="text-slate-900 text-xl font-semibold ">Our Services </h2>
        <p className="text-slate-500 text-xs">Below are service we offer </p>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full">
        <ServiceCards />
      </div>
    </div>
  );
};

export default page;

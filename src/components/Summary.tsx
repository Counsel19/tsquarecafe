import { RootState } from "@/lib/redux/store";
import { FC } from "react";
import { useSelector } from "react-redux";

interface SummaryProps {}
const Summary: FC<SummaryProps> = ({}) => {
  const { selectedService, selectedSlipType } = useSelector(
    (store: RootState) => store.service
  );
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="space-y-6 ">
        <h3>Summary</h3>

        <div className="space-y-6 text-[13px]">
          <div className="grid grid-cols-2 justify-between items-center">
            <span className="font-thin text-slate-500">Service Type</span>
            <span className="font-semibold ">{selectedService.title}</span>
          </div>
          <div className="grid grid-cols-2 justify-between items-center">
            <span className="font-thin text-slate-500">Slip Type</span>
            <span className="font-semibold ">{selectedSlipType.title}</span>
          </div>
          <div className="grid grid-cols-2 justify-between items-center">
            <span className="font-thin text-slate-500">Transaction Cost</span>
            <span className="font-semibold ">#{selectedSlipType.price}</span>
          </div>

          <hr />

          <div className="grid grid-cols-2 justify-between items-center text-lg">
            <span className="font-thin">Total</span>
            <span className="font-semibold ">#{selectedSlipType.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

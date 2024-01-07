import { selectSlipType } from "@/lib/redux/slices/service/serviceSlice";
import { RootState } from "@/lib/redux/store";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

interface SlipTypeProps {
  title: string;
  image: string;
  price: number;
}
const SlipType: FC<SlipTypeProps> = (props) => {
  const { title, image } = props;
  const { selectedSlipType } = useSelector((store: RootState) => store.service);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(selectSlipType(props))}
      className={`relative bg-slate-100 p-3 rounded-lg h-[187px] cursor-pointer border-[2px] ${
        selectedSlipType.title === title ? "border-emerald-500 shadow-lg" : ""
      } hover:border-emerald-500 hover:shadow-lg`}
    >
      {selectedSlipType.title === title && (
        <div className="bg-emerald-400 w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-1 right-1">
          <CheckCheck size={16} className="text-emerald-700" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h4 className="text-center text-sm font-semibold">{title}</h4>

        <div className="border border-slate-100 rounded-lg overflow-hidden">
          <Image
            height={120}
            width={200}
            src={`/assets/services/${image}`}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default SlipType;

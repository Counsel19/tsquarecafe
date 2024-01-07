"use client";

import InputModal from "@/components/InputModal";
import ServiceCards from "@/components/ServiceCards";
import SlipType from "@/components/SlipType";
import Stepper from "@/components/Stepper";
import Summary from "@/components/Summary";
import { Button } from "@/components/ui/Button";
import { toast } from "@/hooks/use-toast";
import { openModal } from "@/lib/redux/slices/modalSlice";
import { RootState } from "@/lib/redux/store";
import { ninServices } from "@/lib/utils";
import { SlipType as SlipsInterfaces } from "@prisma/client";
import axios from "axios";
import { Loader } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface pageProps {}
const NINService: FC<pageProps> = ({}) => {
  const [slipTypes, setSlipTypes] = useState<SlipsInterfaces[]>([]);
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSlipTypes = async () => {
      try {
        const res = await axios.get("/api/slips");

        setSlipTypes(res.data);
      } catch (error) {
        return toast({
          title: "Error Getting NIN Slips",
          description:
            "Unable to retrieve NIN slip types . Plese try again later",
          variant: "destructive",
        });
      }
    };

    getSlipTypes();
  }, []);

  return (
    <div>
      <div className="py-2 ">
        <div className="m-4">
          <h2 className="text-slate-900 text-xl font-semibold ">
            NIN Services
          </h2>
          <p className="text-slate-500 text-xs">
            Below are the NIN services we offer
          </p>
        </div>
        <div className="grid grid-cols-[1fr_280px] grid-rows-[1fr_320px] gap-2 w-full px-4">
          <div className="border-[1px] border-slate-300 rounded-lg p-4 ">
            <h3 className="mb-4">Select a Service</h3>
            <div className="grid grid-cols-3 gap-2 ">
              <ServiceCards isServiceItem servicesData={ninServices} />
            </div>
          </div>

          <div className="grid">
            <Stepper />
          </div>
          <div className=" border-[1px]  bg-white border-slate-300 rounded-lg p-4">
            <h3 className="mb-4">Select a Type</h3>
            <div className="grid grid-cols-3 gap-2  ">
              {slipTypes ? (
                slipTypes.map((item, index) => (
                  <div key={index}>
                    <SlipType {...item} />
                  </div>
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Loader />
                </div>
              )}
            </div>

            <Button
              className="w-full mt-4"
              onClick={() => dispatch(openModal())}
            >
              Proceed
            </Button>
          </div>

          <div className="grid">
            <Summary />
          </div>
        </div>
      </div>

      {isOpen ? <InputModal /> : null}
    </div>
  );
};

export default NINService;

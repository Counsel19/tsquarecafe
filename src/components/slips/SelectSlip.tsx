"use client";

import { FC } from "react";
import PremiumSlip from "@/components/slips/PremiumSlip";
import RegularSlip from "@/components/slips/RegularSlip";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

interface SelectSlipProps {}

const SelectSlip: FC<SelectSlipProps> = ({}) => {
  const { selectedSlipType, response } = useSelector(
    (store: RootState) => store.service
  );
  if (selectedSlipType.title === "NIN Regular Slip") {
    RegularSlip();
  } else if (selectedSlipType.title === "Premium NIN Slip") {
    PremiumSlip();
  }
  return null;
};

export default SelectSlip;

"use client";

import SelectSlip from "@/components/slips/SelectSlip";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { FC, useState } from "react";

interface SlipProps {}
const Slip: FC<SlipProps> = ({}) => {
  const [download, setDownload] = useState<boolean>(false);

  return (
    <div className="p-4">
      <Button
      onClick={() => setDownload(true)}
        className="flex gap-2 items-center "
      >
        <Download />
        Download Slip
      </Button>

      {download && <SelectSlip />}
    </div>
  );
};

export default Slip;

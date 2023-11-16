import { FC } from "react";
import ServiceCard from "./ServiceCard";

interface ServiceCardsProps {
  displayedFromHome?: boolean;
}
const ServiceCards: FC<ServiceCardsProps> = ({ displayedFromHome }) => {
  return (
    <>
      <div className="col-span-1">
        <ServiceCard
          displayedFromHome={displayedFromHome}
          isServiecAvailable
          title="NIN Verification"
          description="Verify people using hteir National Identity Number"
        />
      </div>
      <div className="col-span-1">
        <ServiceCard
          displayedFromHome={displayedFromHome}
          title="BVN Verification"
          description="Verify people using hteir National Identity Number"
        />
      </div>
      <div className="col-span-1">
        <ServiceCard
          displayedFromHome={displayedFromHome}
          title="BVN Verification V2"
          description="Verify people using hteir National Identity Number"
        />
      </div>
      <div className="col-span-1">
        <ServiceCard
          displayedFromHome={displayedFromHome}
          title="Voters Card Verifications"
          description="Verify people using hteir National Identity Number"
        />
      </div>
      <div className="col-span-1">
        <ServiceCard
          displayedFromHome={displayedFromHome}
          title="Bank Account Verification"
          description="Verify people using hteir National Identity Number"
        />
      </div>
      <div className="col-span-1">
        <ServiceCard
          displayedFromHome={displayedFromHome}
          title="NIN Modification"
          description="Verify people using hteir National Identity Number"
        />
      </div>
    </>
  );
};

export default ServiceCards;

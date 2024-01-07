import { FC } from "react";
import ServiceCard from "./ServiceCard";
import { serviceDataType } from "@/types/service";
import ServiceItem from "./ServiceItem";

interface ServiceCardsProps {
  displayedFromHome?: boolean;
  servicesData: serviceDataType[];
  isServiceItem?: boolean;
}
const ServiceCards: FC<ServiceCardsProps> = ({
  displayedFromHome,
  servicesData,
  isServiceItem,
}) => {
  return (
    <>
      {servicesData.map((service, index) => {
        const { title, description, slug, isServiecAvailable, image } = service;

        return !isServiceItem ? (
          <div key={index} className="col-span-1">
            <ServiceCard
              displayedFromHome={displayedFromHome}
              isServiecAvailable={isServiecAvailable}
              title={title}
              description={description}
              image={image}
              slug={slug}
            />
          </div>
        ) : (
          <div key={index} className="col-span-1">
            <ServiceItem
              isServiecAvailable={isServiecAvailable}
              title={title}
              description={description}
              image={image}
              slug={slug}
            />
          </div>
        );
      })}
    </>
  );
};

export default ServiceCards;

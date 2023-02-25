import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import {
  StyledPetSitterServicesSubtitle,
  StyledPetSitterServicesTitle,
} from "./StyledPetSitterServices";
import homeDogBoarding from "../../../../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../../../../assets/Icons/doggyDayCare.svg";
import dogWalking from "../../../../assets/Icons/dogWalking.svg";
import houseSitting from "../../../../assets/Icons/houseSitting.svg";
import { IService } from "../../../../interfaces/petSitterData";

//TODO CHANGE TO REAL DATA FROM PROPS
const petSitter = {
  firstName: "Louise",
};

//TODO CHANGE TO REAL DATA FROM PROPS
const petSitterServices = [
  {
    src: homeDogBoarding,
    service: "Dog Boarding",
    serviceDetail: "Overnight stay at the sitter's home",
    Price: 35,
    Unit: "night",
  },
  {
    src: doggyDayCare,
    service: "Doggy Day Care",
    serviceDetail: "Daytime care for your dog at the sitter's home.",
    Price: 45,
    Unit: "day",
  },
];

//TODO CHANGE TO REAL DATA FROM PROPS
const petSitterServicesHome = [
  {
    src: dogWalking,
    service: "Home visit a day",
    serviceDetail: "Book a pet sitter to stop by your home to feed and play with your pet",
    Price: 30,
    Unit: "day",
  },
  {
    src: houseSitting,
    service: "House Sitting",
    serviceDetail: "A sitter stays overnight in your home and cares for your pet",
    Price: 40,
    Unit: "night",
  },
];

//TODO CHANGE TO REAL DATA FROM PROPS
const dogWalkingService = [
  {
    src: dogWalking,
    service: "Dog Walking",
    serviceDetail: "An experienced dog walker will pick up your dog from your home for a walk",
    Price: 20,
    Unit: "h",
  },
];

interface PetSitterServicesProps {
  firstName: string;
  service: IService[];
}

const PetSitterServices: React.FC<PetSitterServicesProps> = (props) => {
  const { firstName, service } = props;
  return (
    <>
      <StyledPetSitterServicesTitle>
        {petSitter.firstName}&apos;s services
      </StyledPetSitterServicesTitle>
      <StyledPetSitterServicesSubtitle>At the sitter&#39;s home</StyledPetSitterServicesSubtitle>
      {petSitterServices.map((item) => (
        <ServiceDetail
          key={item.service}
          src={item.src}
          serviceName={item.service}
          serviceDetail={item.serviceDetail}
          servicePrice={item.Price}
          serviceUnit={item.Unit}
        ></ServiceDetail>
      ))}
      <StyledPetSitterServicesSubtitle>At your home</StyledPetSitterServicesSubtitle>
      {petSitterServicesHome.map((item) => (
        <ServiceDetail
          key={item.service}
          src={item.src}
          serviceName={item.service}
          serviceDetail={item.serviceDetail}
          servicePrice={item.Price}
          serviceUnit={item.Unit}
        ></ServiceDetail>
      ))}
      <StyledPetSitterServicesSubtitle>
        {petSitter.firstName} also offers
      </StyledPetSitterServicesSubtitle>
      {dogWalkingService.map((item) => (
        <ServiceDetail
          key={item.service}
          src={item.src}
          serviceName={item.service}
          serviceDetail={item.serviceDetail}
          servicePrice={item.Price}
          serviceUnit={item.Unit}
        ></ServiceDetail>
      ))}
    </>
  );
};

export default PetSitterServices;

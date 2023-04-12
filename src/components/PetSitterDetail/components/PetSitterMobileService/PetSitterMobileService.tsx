import {
  SidebarServicesContainer,
  SidebarServicesContent,
  ServiceIconBox,
  ServiceDescContainer,
  ServiceDescContentBox,
  ServicePriceBox,
  AllServicesLink,
} from "./styledPetSitterMobileService";
import { Box, Text } from "@chakra-ui/react";
import homeDogBoarding from "../../../../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../../../../assets/Icons/doggyDayCare.svg";
import dogWalking from "../../../../assets/Icons/dogWalking.svg";
import homeVisits from "../../../../assets/Icons/homeVisits.svg";
import houseSitting from "../../../../assets/Icons/houseSitting.svg";

interface PetSitterSidebarValues {
  petSitterServices: [
    {
      service: string;
      serviceDesc: string;
      Rate: number;
      RateForAddition: number;
      isActive: boolean;
    }
  ];
}

export const PetSitterMobileService = ({ petSitterServices }: PetSitterSidebarValues) => {
  const serviceNames = [
    "Dog boarding",
    "Doggy day care",
    "Dog walking",
    "Home visits",
    "House sitting",
  ];
  const services = serviceNames.map((serviceName) =>
    petSitterServices.find((service) => service.service === serviceName)
  );
  const displayService = services.find((service) => service !== undefined);
  let displayServiceIndex = 0;
  if (displayService) {
    displayServiceIndex = services.indexOf(displayService);
  }
  const servicesDetails = [
    {
      icon: homeDogBoarding,
      serviceDesc: "Overnight stay at the sitter's home",
      time: "night",
    },
    {
      icon: doggyDayCare,
      serviceDesc: "Day care at the sitter's home",
      time: "day",
    },
    {
      icon: dogWalking,
      serviceDesc: "Walks around the neighborhood",
      time: "walk",
    },
    {
      icon: homeVisits,
      serviceDesc: "Visits to your home",
      time: "day",
    },
    {
      icon: houseSitting,
      serviceDesc: "Overnight stay at your home",
      time: "night",
    },
  ];

  return (
    <>
      <SidebarServicesContainer>
        {displayService ? (
          <SidebarServicesContent>
            <ServiceIconBox>
              <img
                width="24px"
                src={servicesDetails[displayServiceIndex].icon}
                alt="home dog boarding"
              />
            </ServiceIconBox>
            <ServiceDescContainer>
              <Text color="rgb(116, 116, 116)">Dog Boarding</Text>
              <ServiceDescContentBox>
                <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                  {servicesDetails[displayServiceIndex].serviceDesc}
                </Text>
                {displayService.RateForAddition ? (
                  <Text fontSize="0.9rem" color="rgb(116, 116, 116)">
                    {displayService.RateForAddition} AUD for each additional pet
                  </Text>
                ) : null}
              </ServiceDescContentBox>
            </ServiceDescContainer>
            {displayService.Rate ? (
              <ServicePriceBox>
                <Text>{displayService.Rate} AUD</Text>
                <Box>
                  <span>/</span> <span>{servicesDetails[displayServiceIndex].time}</span>
                </Box>
              </ServicePriceBox>
            ) : null}
          </SidebarServicesContent>
        ) : (
          <SidebarServicesContent>No services available</SidebarServicesContent>
        )}
        <AllServicesLink href="#services">All services and rates</AllServicesLink>
      </SidebarServicesContainer>
    </>
  );
};

export default PetSitterMobileService;

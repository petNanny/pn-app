import {
  SidebarInfoContainer,
  SidebarPetSitterInfoContainer,
  SidebarLikeBtn,
  SidebarPetSitterName,
  SidebarPetSitterIntro,
  SidebarPetSitterSuburb,
  ProfileSidebar,
  SidebarServicesContainer,
  SidebarServicesContent,
  ServiceIconBox,
  ServiceDescContainer,
  ServiceDescContentBox,
  ServicePriceBox,
  AllServicesLink,
  ContactBtn,
  SidebarPolicyContainer,
  SidebarPolicyTitle,
  SidebarPolicyInfo,
  SidebarPolicyInfoText,
} from "./styledPetSitterSidebar";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { MdFavoriteBorder } from "react-icons/md";
import homeDogBoarding from "../../../../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../../../../assets/Icons/doggyDayCare.svg";
import dogWalking from "../../../../assets/Icons/dogWalking.svg";
import homeVisits from "../../../../assets/Icons/homeVisits.svg";
import houseSitting from "../../../../assets/Icons/houseSitting.svg";

interface PetSitterSidebarValues {
  petSitterAvatar: string;
  petSitterName: string;
  petSitterIntro: string;
  petSitterSuburb: string;
  petSitterServices: [
    {
      service: string;
      serviceDesc: string;
      Rate: number;
      RateForAddition: number;
      isActive: boolean;
    }
  ];
  petSitterCancelPolicy: string;
}

export const PetSitterSidebar = ({
  petSitterAvatar,
  petSitterName,
  petSitterIntro,
  petSitterSuburb,
  petSitterServices,
  petSitterCancelPolicy,
}: PetSitterSidebarValues) => {
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
    <ProfileSidebar>
      <SidebarInfoContainer>
        <SidebarPetSitterInfoContainer>
          <Avatar size="xl" margin="0 1rem auto 0" src={petSitterAvatar} />
          <Box>
            <SidebarPetSitterName>{petSitterName}</SidebarPetSitterName>
            <SidebarPetSitterIntro>{petSitterIntro}</SidebarPetSitterIntro>
            <SidebarPetSitterSuburb>{petSitterSuburb}</SidebarPetSitterSuburb>
          </Box>
          <SidebarLikeBtn leftIcon={<MdFavoriteBorder fontSize="2rem" />} />
        </SidebarPetSitterInfoContainer>
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
        <ContactBtn>Contact {petSitterName}</ContactBtn>
        <SidebarPolicyContainer>
          <SidebarPolicyTitle as="h3">
            Cancelation policy: {petSitterCancelPolicy}
          </SidebarPolicyTitle>
          <SidebarPolicyInfo>
            <SidebarPolicyInfoText>
              <b>Full refund</b> if canceled before <b>12:00 p.m.</b>{" "}
              {petSitterCancelPolicy === "Flexible" ? `one day` : <b>7 days</b>} before the booking,{" "}
              <b>50% refund afterward.</b>
            </SidebarPolicyInfoText>
            <SidebarPolicyInfoText>
              <b>No refund</b> is payable if the booking is canceled <b>on</b> or{" "}
              <b>after the start date.</b>
            </SidebarPolicyInfoText>
            <SidebarPolicyInfoText>
              Note: All times are based on the sitter&apos;s time zone.
            </SidebarPolicyInfoText>
          </SidebarPolicyInfo>
        </SidebarPolicyContainer>
      </SidebarInfoContainer>
    </ProfileSidebar>
  );
};

export default PetSitterSidebar;

import {
  SidebarInfoContainer,
  SidebarPetSitterInfoContainer,
  SidebarLikeBtn,
  SidebarPetSitterName,
  SidebarPetSitterIntro,
  SidebarPetSitterSuburb,
  ProfileSidebar,
  ContactBtn,
  SidebarPolicyContainer,
  SidebarPolicyTitle,
  SidebarPolicyInfo,
  SidebarPolicyInfoText,
} from "./styledPetSitterSidebar";
import { Avatar, Box } from "@chakra-ui/react";
import { MdFavoriteBorder } from "react-icons/md";
import SidebarService from "./components/SidebarService/SidebarService";

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
        <SidebarService petSitterServices={petSitterServices} />
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

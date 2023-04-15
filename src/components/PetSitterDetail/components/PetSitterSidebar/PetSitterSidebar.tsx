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
import { Avatar, Box, useToast, useDisclosure } from "@chakra-ui/react";
import { MdFavoriteBorder } from "react-icons/md";
import SidebarService from "./components/SidebarService/SidebarService";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { usePetOwnerStartConversationMutation } from "../../../../redux/conversationApi";
import ContactModal from "./components/ContactModal/ContactModal";

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
  petSitterAsPetOwnerId: string;
}

export const PetSitterSidebar = ({
  petSitterAvatar,
  petSitterName,
  petSitterIntro,
  petSitterSuburb,
  petSitterServices,
  petSitterCancelPolicy,
  petSitterAsPetOwnerId,
}: PetSitterSidebarValues) => {
  const [startConversation, { data: conversationData }] = usePetOwnerStartConversationMutation();
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const petOwner = useSelector((state: any) => state.petOwner);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!petOwner) {
      setIsDisabledBtn(true);
    }
    if (petOwner) {
      setIsDisabledBtn(false);
    }
  }, [petOwner]);

  const toast = useToast();
  const handleContactBtn = async () => {
    if (!petOwner._id) {
      toast({
        title: "Please sign in to contact the pet sitter.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (petOwner._id) {
      try {
        await startConversation({
          body: {
            senderId: petOwner._id,
            receiverId: petSitterAsPetOwnerId,
          },
        });
        toast({
          title: `Your message has been sent to ${petSitterName}.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onOpen();
      } catch (error) {
        toast({
          title: `Failed to contact with ${petSitterName}.`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

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
        <ContactBtn isDisabled={isDisabledBtn} onClick={handleContactBtn}>
          Contact {petSitterName}
        </ContactBtn>
        <ContactModal
          isOpen={isOpen}
          onClose={onClose}
          petSitterName={petSitterName}
          senderId={petOwner._id}
          receiverId={petSitterAsPetOwnerId}
          conversationData={conversationData}
        />
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

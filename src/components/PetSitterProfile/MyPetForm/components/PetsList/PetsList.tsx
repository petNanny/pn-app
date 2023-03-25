import {
  Box,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAllPetsQuery, useUserDeletePetMutation } from "../../../../../redux/petApi";
import {
  PetCard,
  NameBox,
  InfoBox,
  RemoveBtn,
  EditBtn,
  CancelBtn,
  ConfirmBtn,
} from "./styledPetsList";

const PetsList = () => {
  const [deletePetId, setDeletePetId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: allPetsData, refetch: refetchAllPets } = useGetAllPetsQuery(id);
  const [deletePet, { isSuccess: isDeletePetSuccess, isError: isDeleteError }] =
    useUserDeletePetMutation();

  if (!allPetsData || allPetsData.length === 0) return null;

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = (petId: number) => {
    setIsModalOpen(true);
    setDeletePetId(petId);
  };

  const handleDeletePet = async (petId: number | null) => {
    await deletePet({ petOwnerId: petId });
    setIsModalOpen(false);
    refetchAllPets();
  };

  return (
    <Box>
      <div>list</div>
      {allPetsData.map((pet: any) => (
        <PetCard key={pet._id}>
          <Avatar size="xl" src={pet.avatar} />
          <Box marginLeft="2rem" flex="1 1 0%">
            <NameBox as="h3">{pet.petName}</NameBox>
            <InfoBox>
              {pet.gender}
              &nbsp;
              {pet.species}
              {pet.breed ? `&nbsp;, ${pet.breed}` : ``}
              &nbsp;
              {pet.breed}
            </InfoBox>
            <InfoBox>Year of birth: {pet.yearOfBirth}</InfoBox>
            <Box display="flex" width="100%">
              <RemoveBtn onClick={() => handleModalOpen(pet._id)}>Remove</RemoveBtn>
              <Modal size="xs" onClose={handleModalClose} isOpen={isModalOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Are You Sure?</ModalHeader>
                  <ModalCloseButton />
                  <ModalFooter>
                    <CancelBtn onClick={handleModalClose}>No</CancelBtn>
                    <ConfirmBtn onClick={() => handleDeletePet(deletePetId)}>Yes</ConfirmBtn>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <EditBtn>Edit</EditBtn>
            </Box>
          </Box>
        </PetCard>
      ))}
    </Box>
  );
};

export default PetsList;

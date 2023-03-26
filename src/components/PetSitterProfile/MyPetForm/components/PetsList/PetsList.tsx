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
import {
  useGetAllPetsQuery,
  useUserDeletePetMutation,
  useGetOnePetQuery,
} from "../../../../../redux/petApi";
import {
  PetCard,
  NameBox,
  InfoBox,
  RemoveBtn,
  EditBtn,
  CancelBtn,
  ConfirmBtn,
} from "./styledPetsList";
import { useDispatch } from "react-redux";
import { setPetId } from "../../../../../store/reducer/petSlice";

const PetsList = () => {
  const dispatch = useDispatch();
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
    await deletePet({ petId: petId });
    setIsModalOpen(false);
    refetchAllPets();
  };

  const handleEditPet = (petId: number) => {
    const newPetId = petId.toString();
    dispatch(setPetId(newPetId));
    navigate(`/userProfile/edit-pet/${newPetId}`);
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
              {pet.breed ? `, ${pet.breed}` : ``}
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
              <EditBtn onClick={() => handleEditPet(pet._id)}>Edit</EditBtn>
            </Box>
          </Box>
        </PetCard>
      ))}
    </Box>
  );
};

export default PetsList;

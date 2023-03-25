import {
  Input,
  Button,
  Box,
  Avatar,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
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
import { number } from "yup";

const PetsList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: allPetsData, refetch: refetchAllPets } = useGetAllPetsQuery(id);
  const [deletePet, { isSuccess: isDeletePetSuccess, isError: isDeleteError }] =
    useUserDeletePetMutation();

  if (!allPetsData || allPetsData.length === 0) return null;

  const handleDeletePet = async (petId: number) => {
    await deletePet({ petOwnerId: petId });
    onClose();
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
              <RemoveBtn onClick={onOpen}>Remove</RemoveBtn>
              <Modal size="xs" onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Are You Sure?</ModalHeader>
                  <ModalCloseButton />
                  <ModalFooter>
                    <CancelBtn onClick={onClose}>No</CancelBtn>
                    <ConfirmBtn onClick={() => handleDeletePet(pet._id)}>Yes</ConfirmBtn>
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

import { Box, Spinner, Avatar } from "@chakra-ui/react";
import { PetSitterPetBox, PetInfoBox, PetNameText, PetBreedText } from "./styledPetSitterPets";
import { useGetAllPetsQuery } from "../../../../redux/petApi";
import { useGetOnePetSitterQuery } from "../../../../redux/petSitterApi";
import { useParams, Navigate, useNavigate } from "react-router-dom";

interface PetValues {
  _id: string;
  petName: string;
  breed: string;
  avatar: string;
}

const PetSitterPets = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: petSitterData } = useGetOnePetSitterQuery(id);
  if (!petSitterData) return <Navigate to="/error" replace />;
  const petOwnerId = petSitterData.petOwner._id;
  const { data: petData, isLoading: isPetLoading } = useGetAllPetsQuery(petOwnerId);
  if (!petData || petData.length === 0) return null;
  if (isPetLoading) return <Spinner />;

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleClickPet = (petId: string) => {
    navigate(`/pet/${petId}`);
  };

  return (
    <>
      <Box display="flex" flexWrap="wrap">
        {petData.map((pet: PetValues) => (
          <PetSitterPetBox key={pet._id} onClick={() => handleClickPet(pet._id)}>
            <Avatar size="xl" marginRight="1rem" src={pet.avatar} />
            <PetInfoBox>
              <PetNameText>{capitalize(pet.petName)}</PetNameText>
              <PetBreedText>{capitalize(pet.breed)}</PetBreedText>
            </PetInfoBox>
          </PetSitterPetBox>
        ))}
      </Box>
    </>
  );
};

export default PetSitterPets;

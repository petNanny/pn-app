import FormWrapper from "../FormWrapper/FormWrapper";
import { Input, Button } from "@chakra-ui/react";
import { AddButton, DividedLine } from "./styledMyPetForm";
import { useNavigate, useParams } from "react-router-dom";

const MyPetForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleAddPet = () => {
    navigate(`/userProfile/new-pet/${id}`);
  };

  return (
    <FormWrapper title="Your pets">
      <AddButton onClick={handleAddPet}>Add a pet</AddButton>
      <DividedLine />
    </FormWrapper>
  );
};

export default MyPetForm;

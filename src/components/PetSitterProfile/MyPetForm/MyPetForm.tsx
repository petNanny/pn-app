import FormWrapper from "../FormWrapper/FormWrapper";
import { AddButton } from "./styledMyPetForm";
import { useNavigate, useParams } from "react-router-dom";
import PetsList from "./components/PetsList/PetsList";
import { useEffect } from "react";

const MyPetForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const handleAddPet = () => {
    navigate(`/userProfile/new-pet/${id}`);
  };

  return (
    <FormWrapper title="Your pets">
      <AddButton onClick={handleAddPet}>Add a pet</AddButton>
      <PetsList />
    </FormWrapper>
  );
};

export default MyPetForm;

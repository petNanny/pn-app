import FormWrapper from "../../PetSitterProfile/FormWrapper/FormWrapper";
import PetOwnerCardList from "../../AdminUserCard/PetOwnerCardList/PetOwnerCardList";

const PetOwnerForm = () => {
  return (
    <FormWrapper title={"All Pet Owners"}>
      <PetOwnerCardList />
    </FormWrapper>
  );
};

export default PetOwnerForm;

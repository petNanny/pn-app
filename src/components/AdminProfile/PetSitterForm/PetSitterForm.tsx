import FormWrapper from "../../PetSitterProfile/FormWrapper/FormWrapper";
import PetSitterCardList from "../../AdminUserCard/PetSitterCardList/PetSitterCardList";

const PetSitterForm = () => {
  return (
    <FormWrapper title={"All Pet Sitters"}>
      <PetSitterCardList />
    </FormWrapper>
  );
};

export default PetSitterForm;

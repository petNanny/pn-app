import Container from "../../layouts/container/container";
import PetSitterContent from "../PetSitterContent/PetSitterContent";
import PetSitterContact from "../PetSitterContact/PetSitterContact";
import { StyledPetSitterWrapper } from "./StyledPetSitterCard";
import { useGetPetSitterDetailQuery } from "../../redux/petSitterApi";
import { useParams } from "react-router-dom";

const PetSitterCard = () => {
  const param = useParams();
  const { data: petSitterData } = useGetPetSitterDetailQuery(param.id);

  return (
    <Container paddingTop="15px">
      <StyledPetSitterWrapper>
        <PetSitterContent petSitterData={petSitterData}></PetSitterContent>
        <PetSitterContact></PetSitterContact>
      </StyledPetSitterWrapper>
    </Container>
  );
};

export default PetSitterCard;

import React from "react";
import { IPetSitter } from "../../interfaces/petSitterData";
import PetSitterAbout from "./components/PetSitterAbout/PetSitterAbout";
import PetSitterServices from "./components/PetSitterServices/PetSitterServices";
import { StyledPetSitterContentContainer } from "./StyledPetSitterContent";

interface PetSitterContentProps {
  petSitterData: IPetSitter;
}

const PetSitterContent: React.FC<PetSitterContentProps> = ({ petSitterData }) => {
  return (
    <StyledPetSitterContentContainer>
      <PetSitterAbout
        firstName={petSitterData?.user.firstName}
        introduction={petSitterData?.introduction}
      ></PetSitterAbout>
      <PetSitterServices
        firstName={petSitterData?.user.firstName}
        service={petSitterData?.service}
      ></PetSitterServices>
    </StyledPetSitterContentContainer>
  );
};

export default PetSitterContent;

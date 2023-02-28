import React from "react";
import {
  StyledPetSitterServicesDetail,
  StyledPetSitterServicesContainer,
  StyledPetSitterServicesLogo,
  StyledPetSitterServicesName,
  StyledPetSitterServicesDescription,
  StyledPetSitterServicesDescriptionWrapper,
  StyledPetSitterServicesPriceWrapper,
  StyledPetSitterServicesPrice,
  StyledPetSitterServicesUnit,
} from "./StyledServiceDetail";

interface ServiceDetailProps {
  serviceName: string;
  serviceDetail: string;
  servicePrice: number;
  serviceUnit: string;
  src: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  serviceName,
  serviceDetail,
  servicePrice,
  serviceUnit,
  src,
}) => {
  return (
    <StyledPetSitterServicesContainer>
      <StyledPetSitterServicesLogo src={src}></StyledPetSitterServicesLogo>
      <StyledPetSitterServicesDetail>
        <StyledPetSitterServicesName>{serviceName}</StyledPetSitterServicesName>
        <StyledPetSitterServicesDescriptionWrapper>
          <StyledPetSitterServicesDescription>{serviceDetail}</StyledPetSitterServicesDescription>
        </StyledPetSitterServicesDescriptionWrapper>
      </StyledPetSitterServicesDetail>
      <StyledPetSitterServicesPriceWrapper>
        <StyledPetSitterServicesPrice>{servicePrice} AUD</StyledPetSitterServicesPrice>
        <StyledPetSitterServicesUnit>/{serviceUnit}</StyledPetSitterServicesUnit>
      </StyledPetSitterServicesPriceWrapper>
    </StyledPetSitterServicesContainer>
  );
};

export default ServiceDetail;

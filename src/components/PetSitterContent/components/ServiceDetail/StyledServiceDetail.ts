import styled from "styled-components";
import theme from "../../../../styles/theme";

export const StyledPetSitterServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const StyledPetSitterServicesLogo = styled.img`
  margin: 0 16px 0 8px;
  width: 24px;
`;

export const StyledPetSitterServicesDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const StyledPetSitterServicesName = styled.div`
  color: ${theme.colors.fontcolor.gray};
  font-size: 16px;
`;

export const StyledPetSitterServicesDescriptionWrapper = styled.div`
  color: ${theme.colors.fontcolor.lightGray};
  font-size: 14.4px;
`;

export const StyledPetSitterServicesDescription = styled.div``;

export const StyledPetSitterServicesPriceWrapper = styled.div`
  color: ${theme.colors.fontcolor.gray};
  font-size: 16px;
`;

export const StyledPetSitterServicesPrice = styled.div``;

export const StyledPetSitterServicesUnit = styled.div``;

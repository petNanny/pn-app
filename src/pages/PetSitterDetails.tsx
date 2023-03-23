import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import styled from "styled-components";
import { Stack, Container, Box, Divider, Button, Image, Heading } from "@chakra-ui/react";
import ContactSitter from "../components/ContactSitter/ContactSitter";
const PetSitter = () => {
  return (
    <PageLayout>
      <StyledSitterBox>
        <Box className="sitterDetails">
          <p>SitterDetails</p>
        </Box>
        <Box className="contactSitter">
          <ContactSitter />
        </Box>
      </StyledSitterBox>
    </PageLayout>
  );
};

const StyledSitterBox = styled(Box)`
  &&& {
    margin: 0;
    padding: 0;
    color: white;
    box-sizing: border-box;
    text-decoration: none;
    display: grid;
    grid-template-columns: 60% 40%;
    .sitterDetails {
      background-color: #909090;
      min-height: 600px;
    }
  }
`;

export default PetSitter;

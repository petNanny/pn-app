import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { PetSitterLi } from "./styledPetSitterCard";

interface PetSitterCardType {
  petSitterData: any;
}

const PetSitterCard = (props: PetSitterCardType) => {
  const petSitterData = props.petSitterData;
  return (
    <div>
      <ul>
        {petSitterData.map((post: any) => (
          // <PetSitterLi key={post._id}>PetSitterID: {post._id}</PetSitterLi>
          <Accordion key={post._id} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="left">
                    PetSitterID: {post._id}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <PetSitterLi>Introduction: {post.introduction}</PetSitterLi>
                  <PetSitterLi>Description: {post.description}</PetSitterLi>
                  <PetSitterLi>ABN: {post.abn}</PetSitterLi>
                  <PetSitterLi>Languages: {post.languages}</PetSitterLi>
                  <PetSitterLi>
                    IsActivePetSitter: {post.isActivePetSitter ? "Yes" : "No"}
                  </PetSitterLi>
                  <PetSitterLi>CreatedAt: {post.createdAt}</PetSitterLi>
                  <PetSitterLi>UpdatedAt: {post.updatedAt}</PetSitterLi>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </ul>
    </div>
  );
};

export default PetSitterCard;

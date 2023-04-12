import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import { PetOwnerLi } from "./styledPetOwnerCard";

interface PetOwnerCardType {
  petOwnerData: any;
}

const PetOwnerCard = (props: PetOwnerCardType) => {
  const petOwnerData = props.petOwnerData;
  return (
    <div>
      <ul>
        {petOwnerData.map((post: any) => (
          // <PetOwnerLi key={post._id}>PetOwnerID: {post._id}</PetOwnerLi>
          <Accordion key={post._id} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                  <Box as="span" flex="1" textAlign="left">
                    PetOwnerID: {post._id}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <PetOwnerLi>Email: {post.email}</PetOwnerLi>
                  <PetOwnerLi>FirstName: {post.firstName}</PetOwnerLi>
                  <PetOwnerLi>LastName: {post.lastName}</PetOwnerLi>
                  <PetOwnerLi>userName: {post.userName}</PetOwnerLi>
                  <PetOwnerLi>password: {post.password}</PetOwnerLi>
                  <PetOwnerLi>phone: {post.phone}</PetOwnerLi>
                  <PetOwnerLi>roles: {post.roles}</PetOwnerLi>
                  <PetOwnerLi>isActive: {post.isActive ? "Yes" : "No"}</PetOwnerLi>
                  <PetOwnerLi>CreatedAt: {post.createdAt}</PetOwnerLi>
                  <PetOwnerLi>UpdatedAt: {post.updatedAt}</PetOwnerLi>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </ul>
    </div>
  );
};

export default PetOwnerCard;

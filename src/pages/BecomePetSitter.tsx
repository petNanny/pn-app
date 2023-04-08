import PageLayout from "../components/Layout/PageLayout";
import { Box } from "@chakra-ui/react";
import Hero from "../components/BecomePetSitter/Hero/Hero";
import Introduction from "../components/BecomePetSitter/Introduction/Introduction";
import Instruction from "../components/BecomePetSitter/Instruction/Instruction";
//TODO:this page is https://www.pawshake.com.au/become-a-sitter

const BecomePetSitter = () => {
  return (
    <PageLayout>
      <Hero />
      <Introduction />
      <Box backgroundColor="#F9F9F9">
        <Instruction />
      </Box>
    </PageLayout>
  );
};

export default BecomePetSitter;

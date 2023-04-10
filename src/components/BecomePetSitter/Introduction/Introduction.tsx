import { Box, Image, Stack, Text, Flex, Container } from "@chakra-ui/react";
import sideImage from "../../../assets/becomePetSitter/signupAsSitter.svg";
import checkImage from "../../../assets/becomePetSitter/icon-checkmark.svg";

const Introduction = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      padding="2rem"
      paddingX="5rem"
      height="55vh"
      maxW="6xl"
    >
      <Flex flex="5" flexDirection="column">
        <Text marginBottom="1rem" fontSize="32px" color="#4F4F4F" fontWeight="semibold">
          Adore animals? Become a pet sitter today!
        </Text>
        <Text marginBottom="1rem" fontSize="20px" color="#4F4F4F">
          A fun, flexible job to fit around your life:
        </Text>
        <Stack marginTop="8" spacing="4">
          <Box display="flex">
            <Image src={checkImage} padding="5px" marginRight="1rem" />
            <Text color="#747474">Choose your prices and services</Text>
          </Box>
          <Box display="flex">
            <Image src={checkImage} padding="5px" marginRight="1rem" />
            <Text color="#747474">Be your own boss and control your schedule</Text>
          </Box>
          <Box display="flex">
            <Image src={checkImage} padding="5px" marginRight="1rem" />
            <Text color="#747474">Enjoy work-life balance</Text>
          </Box>
        </Stack>
      </Flex>
      <Box flex="5" display="flex" alignItems="center" justifyContent="center">
        <Image src={sideImage} width="340px" height="300px" />
      </Box>
    </Container>
  );
};

export default Introduction;

import { Box, Text } from "@chakra-ui/react";

interface PetSitterDescriptionValues {
  petSitterDescription: string;
}

const PetSitterDescription = ({ petSitterDescription }: PetSitterDescriptionValues) => {
  return (
    <Box>
      <Text
        color="rgb(116, 116, 116)"
        fontSize="1rem"
        dangerouslySetInnerHTML={{ __html: petSitterDescription }}
      ></Text>
    </Box>
  );
};

export default PetSitterDescription;

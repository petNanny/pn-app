import { Box } from "@chakra-ui/react";

interface PetSitterDescriptionValues {
  petSitterDescription: string;
}

const PetSitterDescription = ({ petSitterDescription }: PetSitterDescriptionValues) => {
  return (
    <Box color="rgb(116, 116, 116)" fontSize="1rem">
      {petSitterDescription}
    </Box>
  );
};

export default PetSitterDescription;

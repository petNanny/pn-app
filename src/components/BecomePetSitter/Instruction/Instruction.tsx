import { Text, Button, Container, Stack } from "@chakra-ui/react";
const Instruction = () => {
  return (
    <Container maxW="6xl" backgroundColor="#F9F9F9" padding="2rem" height="55vh">
      <Stack spacing="4">
        <Text color="#4F4F4F" fontSize="32px" fontWeight="semibold">
          How do I join Pet Nanny?
        </Text>
        <Text color="#747474">
          To join the Pet Nanny community, select the apply button on this page. This will guide you
          through application process and the creation of your profile.
        </Text>
        <Text color="#747474">
          Once our team approves your application, your profile will be live on our website for
          thousands of potential clients to see.
        </Text>
        <Text color="#747474" fontWeight="semibold">
          Tip: be sure to follow our instructions very closely when making your profile.
        </Text>
        <Text color="#747474">
          We have strict standards for all new pet sitters joining the site and only accept the very
          best applications.
        </Text>
        <Text color="#747474">
          This includes a centred profile photo, clear gallery pictures, and a well-written
          description of your experience and services.
        </Text>
        <Button
          bg="#00C38A"
          color="#ffffff"
          fontWeight="md"
          padding="2.5"
          height="70px"
          width="50%"
          marginBottom="2rem"
        >
          Ready to make some new furry pals? Sign up now!
        </Button>
      </Stack>
    </Container>
  );
};

export default Instruction;

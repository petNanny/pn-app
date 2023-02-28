import { Box, Stack, Text } from "@chakra-ui/react";
interface IContent {
  title: string;
  children: React.ReactNode;
}
const FormWrapper = (props: IContent) => {
  return (
    <Stack spacing="0" width="100%">
      <Box
        borderTop="1px"
        borderLeft="1px"
        borderBottom="0.5px"
        borderRight="1px"
        borderColor="#cecece"
        bg="#F9F9F9"
        padding="4"
        borderRadius="sm"
      >
        <Text color="#4F4F4F">{props.title}</Text>
      </Box>
      <Box border="1px" padding="4" borderColor="#cecece" borderRadius="sm">
        {props.children}
      </Box>
    </Stack>
  );
};

export default FormWrapper;

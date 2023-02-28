import { Stack, Checkbox, FormControl, FormLabel, Select } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const MyHome = () => {
  return (
    <FormWrapper title="My home">
      <Stack spacing="4">
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Property type
          </FormLabel>
          <Select placeholder="House" color="#747474" height="50px">
            <option>House</option>
            <option>Apartment</option>
            <option>Farm</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Outdoor area
          </FormLabel>
          <Select placeholder="Medium" color="#747474" height="50px">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>None</option>
          </Select>
        </FormControl>
        <Checkbox size="lg" colorScheme="green" color="#939393">
          Fully fenced backyard
        </Checkbox>
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Kids in your home
          </FormLabel>
          <Select placeholder="None" color="#747474" height="50px">
            <option>Younger than three</option>
            <option>Younger than ten</option>
            <option>Order than ten</option>
          </Select>
        </FormControl>
      </Stack>
    </FormWrapper>
  );
};

export default MyHome;

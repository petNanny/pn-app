import { Stack, Checkbox, FormControl, FormLabel, Select } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const MyHome = (props: any) => {
  const handleUpdatePropertyType = (event: any) => {
    props.setFieldValue("home", {
      ...props.values,
      propertyType: event.target.value,
    });
  };

  const handleUpdateOutDoorArea = (event: any) => {
    props.setFieldValue("home", {
      ...props.values,
      outDoorArea: event.target.value,
    });
  };

  const handleUpdateKids = (event: any) => {
    props.setFieldValue("home", {
      ...props.values,
      kids: event.target.value,
    });
  };
  const handleUpdateFenced = () => {
    props.setFieldValue("home", { ...props.values, fenced: !props.values.fenced });
  };

  return (
    <FormWrapper title="My home">
      <Stack spacing="4">
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Property type
          </FormLabel>
          <Select
            name="propertyType"
            defaultValue={props.values.propertyType}
            color="#747474"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleUpdatePropertyType}
          >
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Farm">Farm</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Outdoor area
          </FormLabel>
          <Select
            defaultValue={props.values.outDoorArea}
            color="#747474"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleUpdateOutDoorArea}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="None">None</option>
          </Select>
        </FormControl>
        <Checkbox
          size="lg"
          colorScheme="green"
          color="#939393"
          onChange={handleUpdateFenced}
          isChecked={props.values.fenced}
        >
          Fully fenced backyard
        </Checkbox>
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Kids in your home
          </FormLabel>
          <Select
            defaultValue={props.values.kids}
            color="#747474"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleUpdateKids}
          >
            <option value="Younger than 3">Younger than three</option>
            <option value="Younger than 10">Younger than ten</option>
            <option value="Order than 10">Order than ten</option>
            <option value="None">None</option>
          </Select>
        </FormControl>
      </Stack>
    </FormWrapper>
  );
};

export default MyHome;

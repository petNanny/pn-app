import { FormControl, FormLabel, Select, Stack, Checkbox, Textarea } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const ExperienceDetailForm = () => {
  return (
    <FormWrapper title="Experience">
      <Stack spacing="4" marginBottom="4">
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Your years of experience
          </FormLabel>
          <Select placeholder="Less than one" color="#747474" height="50px">
            <option>Less than one</option>
            <option>Less than 5</option>
            <option>More than 5</option>
            <option>Less than 10</option>
            <option>More than 10</option>
          </Select>
        </FormControl>
        <FormControl>
          <Checkbox size="lg" color="#747474">
            Experience as volunteer with animal welfare
          </Checkbox>
        </FormControl>
        <FormControl>
          <Checkbox size="lg" color="#747474">
            Experience with behavioural problems
          </Checkbox>
        </FormControl>
        <FormControl>
          <Checkbox size="lg" color="#747474">
            Experience with rescue pets
          </Checkbox>
        </FormControl>
        <FormControl>
          <Checkbox size="lg" color="#747474">
            Familiar with dog training techniques
          </Checkbox>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Description about your skills
          </FormLabel>
          <Textarea placeholder="Your skills description here" color="#939393" height="150px" />
        </FormControl>
      </Stack>
    </FormWrapper>
  );
};

export default ExperienceDetailForm;

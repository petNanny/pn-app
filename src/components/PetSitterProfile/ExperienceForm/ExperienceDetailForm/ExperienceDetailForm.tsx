import {
  FormControl,
  FormLabel,
  Select,
  Stack,
  Checkbox,
  Textarea,
  CheckboxGroup,
} from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const ExperienceDetailForm = (props: any) => {
  const handleUpdate = (event: any) => {
    props.setFieldValue("experience", { ...props.values, years: event.target.value });
  };

  const handleCheckBoxUpdate = (event: any, name: string) => {
    props.setFieldValue("experience", { ...props.values, [name]: !props.values[name] });
  };

  //need add debounce
  const handleUpdateSkillDesc = (event: any) => {
    props.setFieldValue("experience", { ...props.values, skillsDescription: event.target.value });
  };

  return (
    <FormWrapper title="Experience">
      <Stack spacing="4" marginBottom="4">
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Your years of experience
          </FormLabel>
          <Select
            defaultValue={props.values.years}
            color="#747474"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleUpdate}
          >
            <option value="Less than one">Less than one</option>
            <option value="Less than 5">Less than 5</option>
            <option value="More than 5">More than 5</option>
            <option value="Less than 10">Less than 10</option>
            <option value="More than 10">More than 10</option>
          </Select>
        </FormControl>
        <CheckboxGroup colorScheme="green" size="lg">
          <Stack spacing="4">
            <Checkbox
              name="expAsVolunteer"
              isChecked={props.values.expAsVolunteer}
              color="#747474"
              //value="Experience as volunteer with animal welfare"
              onChange={(event: any) => handleCheckBoxUpdate(event, "expAsVolunteer")}
            >
              Experience as volunteer with animal welfare
            </Checkbox>
            <Checkbox
              isChecked={props.values.expWithBehavioralProblems}
              color="#747474"
              //value="Experience with behavioral problems"
              onChange={(event: any) => handleCheckBoxUpdate(event, "expWithBehavioralProblems")}
            >
              Experience with behavioral problems
            </Checkbox>

            <Checkbox
              isChecked={props.values.expWithRescuePets}
              color="#747474"
              //value="Experience with rescue pets"
              onChange={(event: any) => handleCheckBoxUpdate(event, "expWithRescuePets")}
            >
              Experience with rescue pets
            </Checkbox>

            <Checkbox
              isChecked={props.values.familiarWithDogTrainingTechs}
              color="#747474"
              //value="Familiar with dog training techniques"
              onChange={(event: any) => handleCheckBoxUpdate(event, "familiarWithDogTrainingTechs")}
            >
              Familiar with dog training techniques
            </Checkbox>
          </Stack>
        </CheckboxGroup>
        <FormControl>
          <FormLabel fontWeight="md" color="#939393">
            Description about your skills
          </FormLabel>
          <Textarea
            placeholder="Your skills description here"
            color="#939393"
            height="150px"
            defaultValue={props.values.skillsDescription}
            onChange={handleUpdateSkillDesc}
            focusBorderColor="#00C38A"
          />
        </FormControl>
      </Stack>
    </FormWrapper>
  );
};

export default ExperienceDetailForm;

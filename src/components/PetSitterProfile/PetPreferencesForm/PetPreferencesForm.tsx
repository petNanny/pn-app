import { Stack, Checkbox, Text, Button, Flex, CheckboxGroup, useToast } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";

const PetPreferencesForm = () => {
  const { id } = useParams();

  const { data } = useGetOnePetOwnerQuery(id);
  const petSitter = data.petSitter;
  const toast = useToast();
  const [updatePetPreference] = useUpdateOnePetSitterMutation();

  const { values, handleSubmit, handleChange, handleBlur, setFieldValue } = useFormik({
    initialValues: {
      preference: {
        age: data.petSitter.preference.age ?? [],
        size: data.petSitter.preference.size ?? [],
        petTypes: data.petSitter.preference.petTypes ?? [],
      },
    },
    onSubmit: (values) => {
      try {
        updatePetPreference({ ...petSitter, preference: values.preference });
        toast({
          title: "Pet Preferences changed.",
          description: "We've changed your Pet Preferences for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      } catch (error) {
        toast({
          title: "Pet Preferences changed failure.",
          description: "We can't change your Pet Preferences.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    },
  });
  // handle age string
  const handleAgeUpdate = (event: React.ChangeEvent<HTMLInputElement>, preference: any) => {
    if (preference.age.includes(event.target.value)) {
      setFieldValue("preference", {
        ...preference,
        age: preference.age.filter((age: string) => age !== event.target.value),
      });
    } else {
      setFieldValue("preference", {
        ...preference,
        age: [...preference.age, event.target.value],
      });
    }
  };

  // handle size string
  const handleSizeUpdate = (event: React.ChangeEvent<HTMLInputElement>, preference: any) => {
    if (preference.size.includes(event.target.value)) {
      setFieldValue("preference", {
        ...preference,
        size: preference.size.filter((size: string) => size !== event.target.value),
      });
    } else {
      setFieldValue("preference", {
        ...preference,
        size: [...preference.size, event.target.value],
      });
    }
  };

  // handle type string
  const handleTypesUpdate = (event: React.ChangeEvent<HTMLInputElement>, preference: any) => {
    if (preference.petTypes.includes(event.target.value)) {
      setFieldValue("preference", {
        ...preference,
        petTypes: preference.petTypes.filter((type: string) => type !== event.target.value),
      });
    } else {
      setFieldValue("preference", {
        ...preference,
        petTypes: [...preference.petTypes, event.target.value],
      });
    }
  };

  return (
    <Stack width="100%">
      <form onSubmit={handleSubmit}>
        <FormWrapper title="Pet preferences">
          <Stack spacing="4">
            <CheckboxGroup colorScheme="green" size="lg" defaultValue={values.preference.age}>
              <Stack spacing="4">
                <Text color="#939393">Accepted dog ages</Text>
                <Checkbox
                  color="#747474"
                  value="Puppies"
                  onChange={(event) => handleAgeUpdate(event, values.preference)}
                >{`Puppies ( < 1 year )`}</Checkbox>
                <Checkbox
                  color="#747474"
                  value="Young"
                  onChange={(event) => handleAgeUpdate(event, values.preference)}
                >{`Young ( 1-3 years )`}</Checkbox>
                <Checkbox
                  color="#747474"
                  value="Adult"
                  onChange={(event) => handleAgeUpdate(event, values.preference)}
                >{`Adult ( 3-8 years )`}</Checkbox>
                <Checkbox
                  color="#747474"
                  value="Senior"
                  onChange={(event) => handleAgeUpdate(event, values.preference)}
                >{`Senior ( 8+ years )`}</Checkbox>
              </Stack>
            </CheckboxGroup>

            <CheckboxGroup colorScheme="green" size="lg" defaultValue={values.preference.size}>
              <Stack spacing="4">
                <Text color="#939393">Accepted dog sizes</Text>
                <Checkbox
                  color="#747474"
                  value="Small"
                  onChange={(event) => handleSizeUpdate(event, values.preference)}
                >{`Small ( 0-7kg )`}</Checkbox>
                <Checkbox
                  color="#747474"
                  value="Medium"
                  onChange={(event) => handleSizeUpdate(event, values.preference)}
                >{`Medium ( 8-18kg )`}</Checkbox>
                <Checkbox
                  color="#747474"
                  value="Large"
                  onChange={(event) => handleSizeUpdate(event, values.preference)}
                >{`Large ( 18-45kg )`}</Checkbox>
                <Checkbox
                  color="#747474"
                  value="Giant"
                  onChange={(event) => handleSizeUpdate(event, values.preference)}
                >{`Giant ( 45+ kg )`}</Checkbox>
              </Stack>
            </CheckboxGroup>

            <CheckboxGroup colorScheme="green" size="lg" defaultValue={values.preference.petTypes}>
              <Stack spacing="4">
                <Text color="#939393">Other pet types</Text>
                <Checkbox
                  color="#747474"
                  value="Dogs"
                  onChange={(event) => handleTypesUpdate(event, values.preference)}
                >
                  Dogs
                </Checkbox>
                <Checkbox
                  color="#747474"
                  value="Cats"
                  onChange={(event) => handleTypesUpdate(event, values.preference)}
                >
                  Cats
                </Checkbox>
                <Checkbox
                  color="#747474"
                  value="Ferret"
                  onChange={(event) => handleTypesUpdate(event, values.preference)}
                >
                  Ferret
                </Checkbox>
                <Checkbox
                  color="#747474"
                  value="Small animals"
                  onChange={(event) => handleTypesUpdate(event, values.preference)}
                >
                  Small animals ( rodents, rabbits, birds )
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </Stack>
        </FormWrapper>
        <Button
          marginTop="4"
          bg="#00C38A"
          color="#ffffff"
          padding="2.5"
          height="50px"
          width="100%"
          type="submit"
        >
          Save
        </Button>
      </form>
    </Stack>
  );
};

export default PetPreferencesForm;

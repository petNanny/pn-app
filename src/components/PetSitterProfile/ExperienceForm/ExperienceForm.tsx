import { Flex, Button, Stack, useToast } from "@chakra-ui/react";
import ExperienceDetailForm from "./ExperienceDetailForm/ExperienceDetailForm";
import LanguageForm from "./LanguageForm/LanguageForm";
import { useParams } from "react-router-dom";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useFormik } from "formik";

const ExperienceForm = () => {
  const { id } = useParams();
  const { data } = useGetOnePetOwnerQuery(id);
  const petSitter = data.petSitter;
  const [updateExperience] = useUpdateOnePetSitterMutation();
  const toast = useToast();

  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      experience: data.petSitter.experience,
      languages: data.petSitter.languages,
    },
    onSubmit: async (values) => {
      try {
        await updateExperience({
          ...petSitter,
          experience: values.experience,
          languages: values.languages,
        });
        toast({
          title: "Experiences and languages changed.",
          description: "We've changed your experiences and languages for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      } catch (error) {
        toast({
          title: "Experiences and languages changed failure.",
          description: "We can't change your experiences and languages.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    },
  });

  return (
    <Flex flexDirection="column" width="100%" gap="8">
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <ExperienceDetailForm
            values={values.experience}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <LanguageForm
            values={values.languages}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <Button type="submit" backgroundColor="#00C38A" color="#ffffff" height="50px">
            Save
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default ExperienceForm;

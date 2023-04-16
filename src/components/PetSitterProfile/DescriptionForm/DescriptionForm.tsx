import { useState } from "react";
import { Flex, Button, Stack, useToast } from "@chakra-ui/react";
import HeadLineForm from "./HeadLineForm/HeadLineForm";
import LongDescriptionForm from "./LongDescriptionForm/LongDescriptionForm";
import { useFormik } from "formik";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useParams } from "react-router-dom";

const DescriptionForm = () => {
  const toast = useToast();

  const { id } = useParams();
  const { data, refetch: refetchPetOwnerData } = useGetOnePetOwnerQuery(id);
  const petSitter = data.petSitter;
  const [updateDesc] = useUpdateOnePetSitterMutation();

  // console.log(petSitter.description);
  // console.log(JSON.parse(petSitter.description));
  // const blocks = JSON.parse(petSitter.description);
  // console.log(convertFromRaw(JSON.parse(petSitter.description)));
  // console.log(EditorState.createWithContent(convertFromRaw(JSON.parse(petSitter.description))));

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      introduction: petSitter.introduction,
      description: petSitter.description,
    },
    onSubmit: (values) => {
      try {
        updateDesc({ ...petSitter, ...values });
        toast({
          title: "Introduction and description changed.",
          description: "We've changed your introduction and description for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        refetchPetOwnerData();
      } catch (error) {
        toast({
          title: "Introduction and description changed failure.",
          description: "We can't change your introduction and description areas.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    },
  });

  return (
    <Flex flexDirection="column" gap="8" width="100%">
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <HeadLineForm values={values.introduction} handleChange={handleChange} />
          <LongDescriptionForm values={values.description} setFieldValue={setFieldValue} />
          <Button type="submit" backgroundColor="#00C38A" color="#ffffff" height="50px">
            Save
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default DescriptionForm;

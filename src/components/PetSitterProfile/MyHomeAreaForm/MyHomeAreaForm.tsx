import { Flex, Button, Stack, useToast } from "@chakra-ui/react";
import MyHome from "./MyHome/MyHome";
import WalkingArea from "./WalkingArea/WalkingArea";
import { useFormik } from "formik";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useParams } from "react-router-dom";

const MyHomeAreaForm = () => {
  const { id } = useParams();
  const { data } = useGetOnePetOwnerQuery(id);
  const petSitter = data.petSitter;
  const [updateHome] = useUpdateOnePetSitterMutation();
  const toast = useToast();

  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      home: data.petSitter.home,
      WalkingAreas: data.petSitter.walkingAreas,
    },
    onSubmit: (values) => {
      try {
        updateHome({ ...petSitter, home: values.home, walkingAreas: values.WalkingAreas });
        toast({
          title: "Home and Walking areas changed.",
          description: "We've changed your home and walking areas for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      } catch (error) {
        toast({
          title: "Home and walking areas changed failure.",
          description: "We can't change your home and walking areas.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    },
  });

  return (
    <Flex flexDirection="column" width="100%">
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <MyHome handleChange={handleChange} setFieldValue={setFieldValue} values={values.home} />
          <WalkingArea
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            values={values.WalkingAreas}
          />
          <Button
            type="submit"
            bg="#00C38A"
            color="#ffffff"
            fontWeight="md"
            padding="2.5"
            height="50px"
          >
            Save
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default MyHomeAreaForm;

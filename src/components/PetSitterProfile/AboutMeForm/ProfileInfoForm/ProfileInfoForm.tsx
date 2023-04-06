import { FormControl, FormLabel, Input, Stack, Button, useToast, Text } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import {
  useGetOnePetOwnerQuery,
  useUpdateOnePetOwnerMutation,
} from "../../../../redux/petOwnerApi";
import updatePetOwnerValidator from "./updatePetOwnerValidator";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  userName: string;
}

const ProfileInfoForm = () => {
  const { id } = useParams();
  const { data } = useGetOnePetOwnerQuery(id);

  const [updatePetOwner] = useUpdateOnePetOwnerMutation();
  const toast = useToast();

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
    },
    validationSchema: updatePetOwnerValidator,
    onSubmit: async (values: Values) => {
      try {
        await updatePetOwner({
          ...data,
          firstName: values.firstName,
          lastName: values.lastName,
          userName: values.userName,
        }).unwrap();
        toast({
          title: "Your info changed.",
          description: "We've changed your info for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      } catch (error) {
        toast({
          title: "Your info changed error.",
          description: "We've can't change your info for you.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    },
  });

  return (
    <FormWrapper title={"Your info"}>
      <Stack>
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormControl marginBottom="4">
            <FormLabel color="#4F4F4F" fontWeight="md">
              First name
            </FormLabel>
            <Input
              id="firstName"
              name="firstName"
              height="50px"
              focusBorderColor="#00C38A"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName ? (
              <Text color="red" fontSize="sm" padding="1">
                {errors.firstName}
              </Text>
            ) : null}
          </FormControl>
          <FormControl marginBottom="4">
            <FormLabel color="#4F4F4F" fontWeight="md">
              Last name
            </FormLabel>
            <Input
              id="lastName"
              name="lastName"
              focusBorderColor="#00C38A"
              height="50px"
              onChange={handleChange}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName ? (
              <Text color="red" fontSize="sm" padding="1">
                {errors.lastName}
              </Text>
            ) : null}
          </FormControl>
          <FormControl marginBottom="4">
            <FormLabel color="#4F4F4F" fontWeight="md">
              User name
            </FormLabel>
            <Input
              id="userName"
              name="userName"
              focusBorderColor="#00C38A"
              height="50px"
              onChange={handleChange}
              value={values.userName}
            />
            {errors.userName && touched.userName ? (
              <Text color="red" fontSize="sm" padding="1">
                {errors.userName}
              </Text>
            ) : null}
          </FormControl>
          <FormControl marginBottom="4">
            <FormLabel color="#4F4F4F" fontWeight="md">
              Email
            </FormLabel>
            <Input name="email" height="50px" value={data.email} disabled />
          </FormControl>
          <Button
            type="submit"
            bg="#00C38A"
            color="#ffffff"
            fontWeight="md"
            padding="2.5"
            height="50px"
            width="100%"
            marginBottom="4"
          >
            Save
          </Button>
        </form>
      </Stack>
    </FormWrapper>
  );
};

export default ProfileInfoForm;

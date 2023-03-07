import { FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import { useFormik } from "formik";

const onSubmit = async (values: any, actions: any) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const HeadLineForm = () => {
  const { values, handleBlur, handleChange, handleSubmit, isSubmitting, handleReset } = useFormik({
    initialValues: {
      headline: "",
    },
    onSubmit,
  });
  return (
    <FormWrapper title={"Headline"}>
      <Stack>
        <Text color="#4F4F4F" marginBottom="4">
          Write an eye-catching headline. Make it short, descriptive, and genuine.
        </Text>
        <FormControl>
          <Input name="headline" value={values.headline} onChange={handleChange} marginBottom="4" />
        </FormControl>
      </Stack>
    </FormWrapper>
  );
};

export default HeadLineForm;

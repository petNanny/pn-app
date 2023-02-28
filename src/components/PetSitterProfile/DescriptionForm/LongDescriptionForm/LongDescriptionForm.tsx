import React, { useState } from "react";
import { FormControl, FormLabel, Input, Stack, Text, Box } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import { useFormik } from "formik";
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";

const onSubmit = async (values: any, actions: any) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const LongDescriptionForm = () => {
  const { values, handleBlur, handleChange, handleSubmit, isSubmitting, handleReset } = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit,
  });
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  return (
    <FormWrapper title={"Description"}>
      <Stack>
        <Box marginBottom="4">
          <Text color="#4F4F4F" marginTop="4">
            Write at least 220 words: about yourself and your motivation to be a pet sitter. Pet
            owners want to read about you before they contact you, so share all about your passion
            for pet sitting and your services.
          </Text>
          <Text marginTop="4">
            Avoid spelling and grammatical errors. Mentioning contact details, such as phone
            numbers, email addresses, social media accounts and other external links is not allowed.
          </Text>
          <Text marginTop="4">What is your motivation to be a pet sitter?</Text>
          <Text marginTop="4">Do you have previous experience?</Text>
          <Text marginTop="4">Do you only take vaccinated pets into your home?</Text>
        </Box>
        <Box border="1px" borderColor="#cecece" borderRadius="sm" marginBottom="4">
          <Box padding="2">
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorStyle={{
                padding: 5,
              }}
              toolbar={{
                options: ["inline", "list", "remove", "history"],
                inline: { options: ["bold", "italic", "underline"] },
                list: { options: ["unordered", "ordered"] },
              }}
            />
          </Box>
        </Box>
      </Stack>
    </FormWrapper>
  );
};

export default LongDescriptionForm;

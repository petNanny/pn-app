import { useState } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML, convertFromHTML } from "draft-convert";

const getDefaultEditorState = (value?: string) => {
  if (value) {
    return EditorState.createWithContent(convertFromHTML(value));
  } else {
    return EditorState.createEmpty();
  }
};

const LongDescriptionForm = (props: any) => {
  const [editorState, setEditorState] = useState(getDefaultEditorState(props.values));

  const handleEditorChange = (state: any) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    props.setFieldValue("description", currentContentAsHTML);
  };

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
              onEditorStateChange={handleEditorChange}
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

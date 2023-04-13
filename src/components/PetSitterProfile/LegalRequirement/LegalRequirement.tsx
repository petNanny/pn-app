import { ChangeEvent, MouseEvent, useState } from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import {
  StyledUnorderdList,
  StyledFormControl,
  StyledInput,
  StyledFormLabel,
} from "./StyledLegalRequirement";
import { useToast, ListItem } from "@chakra-ui/react";
import buttonStyles from "../../../styles/components/buttonStyles";
import { useSelector } from "react-redux";
import { useUploadLegalDocMutation } from "../../../redux/legalRequirementApi";
import { RootState } from "../../../store";
import LegalDocuments from "./LegalDocuments";

const LegalRequirement = () => {
  const [newDocUploaded, setNewDocUploaded] = useState(false);
  const [uploadLegalDoc] = useUploadLegalDocMutation();
  const toast = useToast();
  // const petOwner = useSelector((state: any) => state.petOwner);
  const petOwner = useSelector((state: RootState) => state.petOwner);
  const { petSitter } = petOwner;
  const uploadSuccessId = "uploadSuccess";
  const uploadFailId = "uploadFail";

  const onInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const containerStyle = { fontSize: "20px", maxWidth: "400px", padding: "10px" };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    await uploadLegalDoc({ petSitterId: petSitter._id, body: formData })
      .unwrap()
      .then(() => {
        if (!toast.isActive(uploadSuccessId)) {
          toast({
            id: uploadSuccessId,
            title: "Legal Document upload successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            containerStyle: containerStyle,
          });
        }
        setNewDocUploaded(true);
      })
      .catch((err) => {
        if (!toast.isActive(uploadFailId)) {
          toast({
            id: uploadFailId,
            title: "Legal Document upload failed",
            description: err.data.error,
            status: "error",
            duration: 3000,
            isClosable: true,
            containerStyle: containerStyle,
          });
        }
        setNewDocUploaded(false);
      });
  };

  const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = "";
  };

  return (
    <FormWrapper title="Legal requirement">
      <StyledUnorderdList>
        <ListItem>By law, all Pet Sitters in Australia need Public Liability Insurance.</ListItem>
        <ListItem>By law, all Pet Sitters are required to have ABN.</ListItem>
        <ListItem>By law, all Pet Sitter need Permit from local councils.</ListItem>
        <ListItem>
          Pet sitters have a legal duty of care: Providing food and water & Providing accommodation
          or living conditions & Understanding your animal&apos;s nomral behavioral patterns &
          Treating disease and injury & Handling the animals appropriately.
        </ListItem>
      </StyledUnorderdList>
      <StyledFormControl>
        <StyledFormLabel {...buttonStyles.variants.submitBtn}>Add files</StyledFormLabel>
        <StyledInput
          type="file"
          accept="image/*,.pdf"
          onChange={onInputChange}
          onClick={handleInputClick}
        />
        {/* <StyledInput type="submit" value="Add files" /> */}
      </StyledFormControl>
      <LegalDocuments newDocUploaded={newDocUploaded} setNewDocUploaded={setNewDocUploaded} />
    </FormWrapper>
  );
};

export default LegalRequirement;

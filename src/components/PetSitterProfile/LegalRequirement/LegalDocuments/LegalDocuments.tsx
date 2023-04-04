import { useToast } from "@chakra-ui/react";
import { StyledListItem, StyledUnorderdList } from "./StyledLegalDocuments";
import { ListIcon, Text, CloseButton, Spacer } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useDeleteLegalDocMutation,
  useUserGetOwnLegalDocQuery,
} from "../../../../redux/legalRequirementApi";
import { profileLegalDoc } from "../../../../interfaces/profileLegalDoc";

interface LegalDocumentsProps {
  newDocUploaded: boolean;
  setNewDocUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const LegalDocuments = ({ newDocUploaded, setNewDocUploaded }: LegalDocumentsProps) => {
  const [uploadedDocs, setUploadedDocs] = useState<profileLegalDoc[]>([]);
  const petOwner = useSelector((state: any) => state.petOwner);
  const { petSitter } = petOwner;
  const { data: docsData, refetch: refetchDocs } = useUserGetOwnLegalDocQuery(petSitter._id);
  const [remove, { isSuccess: isRemoveSuccess, isError: isRemoveError }] =
    useDeleteLegalDocMutation();
  const toast = useToast();
  const containerStyle = { fontSize: "20px", maxWidth: "400px", padding: "10px" };

  const removeSuccessId = "removeSuccess";
  const removeFailId = "removeFail";

  //if new Doc added, refresh
  if (newDocUploaded) {
    refetchDocs();
    setNewDocUploaded(false);
  }

  // update the local uploadedDocs after Docs changes
  useEffect(() => {
    if (docsData) {
      setUploadedDocs(docsData);
    } else {
      setUploadedDocs([]);
    }
  }, [docsData]);

  useEffect(() => {
    if (isRemoveSuccess) {
      if (!toast.isActive(removeSuccessId)) {
        toast({
          id: removeSuccessId,
          title: "Document removed successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          containerStyle: containerStyle,
        });
      }
    }

    if (isRemoveError) {
      if (!toast.isActive(removeFailId)) {
        toast({
          id: removeFailId,
          title: "Document removed failed",
          status: "error",
          duration: 3000,
          isClosable: true,
          containerStyle: containerStyle,
        });
      }
    }
  }, [isRemoveSuccess, isRemoveError]);

  const handleRemoveDocument = async (e: any, fileName: string) => {
    e.preventDefault();
    const bodyData = {
      fileName: fileName,
    };
    await remove({ petSitterId: petSitter._id, body: bodyData });
    refetchDocs();
  };

  return (
    <Fragment>
      {uploadedDocs.length > 0 ? <Text>Uploaded Documents:</Text> : null}
      <StyledUnorderdList>
        {uploadedDocs.map(
          (uploadedDoc: { _id: string; url: string; fileName: string; orderNumber: number }) => (
            <StyledListItem key={uploadedDoc._id}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Text>{uploadedDoc.fileName}</Text>
              <Spacer />
              <CloseButton onClick={(e) => handleRemoveDocument(e, uploadedDoc.fileName)} />
            </StyledListItem>
          )
        )}
      </StyledUnorderdList>
    </Fragment>
  );
};

export default LegalDocuments;

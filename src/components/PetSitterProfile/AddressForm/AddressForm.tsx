import React, { useRef } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import AddressModal from "./AddressModal";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";

const AddressForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateAddress, { isLoading, isSuccess, isError, error }] = useUpdateOnePetSitterMutation();

  const confirmChangeAddress = () => {
    console.log("prepare save");
  };
  return (
    <FormWrapper title="Address">
      <Button
        backgroundColor="#00C38A"
        color="#ffffff"
        height="50px"
        width="100%"
        fontWeight="md"
        onClick={onOpen}
      >
        Change address
      </Button>
      {isOpen && <AddressModal isOpen onClose={onClose} onConfirm={() => confirmChangeAddress()} />}
    </FormWrapper>
  );
};

export default AddressForm;

import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import SearchPanel from "./SearchPanel";
import { useCallback } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { updatePetSitterInfo } from "../../../store/reducer/petSitterSlice";
import { useDispatch } from "react-redux";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

interface IAddress {
  streetNumber: string;
  street: string;
  city: string;
  council: string;
  state: string;
  country: string;
  postcode: string;
  latitude: string;
  longitude: string;
}

const AddressModal = ({ isOpen, onClose, onConfirm }: Props) => {
  const [getAddress, setGetAddress] = useState("");
  const dispatch = useDispatch();

  const handleGetAddress = useCallback((address: any) => {
    console.log(address, "addressaddressaddress");
    setGetAddress(address);
  }, []);
  const handleAddressSave = useCallback(({ address }: any) => {
    dispatch(updatePetSitterInfo(address));
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel htmlFor="address"></FormLabel>
            <SearchPanel handleGetAddress={handleGetAddress} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            backgroundColor="#00C38A"
            color="#ffffff"
            height="50px"
            width="100%"
            onClick={() => {
              handleAddressSave(getAddress);
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddressModal;

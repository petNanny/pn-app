import { useState, useCallback } from "react";
import { RootState } from "../../../store";
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
  useToast,
} from "@chakra-ui/react";
import { updatePetSitterInfo } from "../../../store/reducer/petSitterSlice";
import { useDispatch } from "react-redux";
import PlacesAutocomplete from "./SearchPanel/SearchPanel";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useSelector } from "react-redux";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface IAddress {
  streetNumber: string | null;
  street: string;
  city: string;
  council: string;
  state: string;
  country: string;
  postcode: string;
  latitude: string;
  longitude: string;
}

const AddressModal = ({ isOpen, onClose }: Props) => {
  const [getAddress, setGetAddress] = useState<IAddress | null>(null);
  const petOwner = useSelector((state: RootState) => state.petOwner);
  const petSitter = petOwner.petSitter;

  const [updateAddress, { isLoading, isSuccess, isError, error }] = useUpdateOnePetSitterMutation();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleGetAddress = useCallback((address: IAddress | null) => {
    setGetAddress(address);
  }, []);

  const handleAddressSave = useCallback((petSitter: any, getAddress: IAddress | null) => {
    try {
      updateAddress({
        ...petSitter,
        address: getAddress,
        geoCode: {
          type: "Point",
          coordinates: [getAddress?.longitude, getAddress?.latitude],
        },
      });
      dispatch(updatePetSitterInfo({ ...petSitter, address: getAddress }));
      toast({
        title: "Address changed.",
        description: "We've changed your address for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
        containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
      });
      onClose();
    } catch (error) {
      toast({
        title: "Address changed failure.",
        description: "We can't change your address.",
        status: "error",
        duration: 9000,
        isClosable: true,
        containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
      });
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <PlacesAutocomplete handleGetAddress={handleGetAddress} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            backgroundColor="#00C38A"
            color="#ffffff"
            height="50px"
            width="100%"
            onClick={() => {
              handleAddressSave(petSitter, getAddress);
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

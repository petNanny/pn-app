import { Button, Input, FormControl, FormLabel, Stack, Box, useDisclosure } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import AddressModal from "./AddressModal";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useParams } from "react-router-dom";

const AddressForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const { data } = useGetOnePetOwnerQuery(id);
  // const petSitterAddress = data?.petSitter.address;
  // console.log(petSitterAddress);
  let address;
  if (data && data.petSitter && data.petSitter.address) {
    address = data.petSitter.address;
  } else {
    address = {
      street_number: "",
      street: "",
      city: "",
      council: "",
      postcode: "",
      state: "",
      country: "",
    };
  }

  return (
    <FormWrapper title="Address">
      <Stack spacing="4">
        <FormControl>
          <FormLabel fontWeight="md" color="#4F4F4F">
            Street number
          </FormLabel>
          <Input type="text" value={address.street_number} disabled height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#4F4F4F">
            Street
          </FormLabel>
          <Input type="text" value={address.street} disabled height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#4F4F4F">
            City
          </FormLabel>
          <Input type="text" value={address.city} disabled height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#4F4F4F">
            Council
          </FormLabel>
          <Input type="text" value={address.council} disabled height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#4F4F4F">
            Postcode
          </FormLabel>
          <Input type="text" value={address.postcode} disabled height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#4F4F4F">
            State
          </FormLabel>
          <Input type="text" value={address.state} disabled height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="md" color="#4F4F4F">
            Country
          </FormLabel>
          <Input type="text" value={address.country} disabled height="50px" />
        </FormControl>
      </Stack>
      <Box marginTop="4">
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
      </Box>
      {isOpen && <AddressModal isOpen onClose={onClose} />}
    </FormWrapper>
  );
};

export default AddressForm;

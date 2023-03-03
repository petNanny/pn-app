import { Stack, Button, useDisclosure, useToast } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useDeleteOnePetOwnerMutation } from "../../../../redux/petOwnerApi";
import { useNavigate } from "react-router-dom";

const ProfileDeleteForm = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [deleteUser] = useDeleteOnePetOwnerMutation();

  const currentPetOwner = localStorage.getItem("currentPetOwner");
  const petOwner = currentPetOwner ? JSON.parse(currentPetOwner) : null;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const confirmDelete = (id: string) => {
    deleteUser(id);
    onClose();
    toast({
      title: "Account Deleted.",
      description: "You've been successful delete your account",
      status: "error",
      duration: 9000,
      isClosable: true,
      containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
    });
    navigate("/");
  };
  return (
    <FormWrapper title={"Remove account"}>
      <Stack>
        <Button
          bg="#EB4C52"
          color="#ffffff"
          fontWeight="md"
          padding="2.5"
          height="50px"
          onClick={() => {
            onOpen();
          }}
        >
          Delete my profile
        </Button>
        <DeleteConfirmModal
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={() => confirmDelete(petOwner._id)}
          shownText={"Are you sure you want to delete this account?"}
        />
      </Stack>
    </FormWrapper>
  );
};

export default ProfileDeleteForm;

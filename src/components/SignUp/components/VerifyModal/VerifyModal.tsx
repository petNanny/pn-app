import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface VerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerifyModal = ({ isOpen, onClose }: VerifyModalProps) => {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/login");
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            We have sent a verify email to your registered email, please click the link from your
            email to verify your account.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleBtn}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VerifyModal;

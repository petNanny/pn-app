import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  Stack,
  CloseButton,
} from "@chakra-ui/react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { StyledModalFooter } from "./StyledPopup";

interface PopupProps {
  open: boolean;
  handlePopupClose: (e: any) => void;
  croppedImage: string | undefined;
}

const Popup = ({ open, handlePopupClose, croppedImage }: PopupProps) => {
  const { onClose } = useDisclosure();

  return (
    <>
      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={open} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="space-between">
            <Text>Upload image</Text>
            <CloseButton onClick={handlePopupClose} />
          </ModalHeader>
          <ModalBody>
            <Box maxW="400px">
              <Cropper
                style={{ width: "100%" }}
                preview=".img-preview"
                src={croppedImage}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
                rotatable
              />
            </Box>
          </ModalBody>
          <StyledModalFooter>
            <Button onClick={handlePopupClose}>Rotate</Button>
            <Button type="submit">Complete</Button>
          </StyledModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;

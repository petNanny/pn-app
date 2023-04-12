import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useSendMessageMutation } from "../../../../../../redux/messageApi";
import { useFormik, FormikProps } from "formik";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  petSitterName: string;
  senderId: string;
  receiverId: string;
  conversationData: {
    _id: string;
  };
}

interface FormValues {
  message: string;
}

const ContactModal = ({
  isOpen,
  onClose,
  petSitterName,
  senderId,
  conversationData,
}: ContactModalProps) => {
  useEffect(() => {
    if (!conversationData || !conversationData._id) {
      onClose();
    }
  }, [conversationData]);

  const [sendMessage] = useSendMessageMutation();
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      sendMessage({
        body: {
          conversationId: conversationData._id,
          sender: senderId,
          text: values.message,
        },
      });
      formik.resetForm();
      onClose();
    },
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
        <ModalOverlay />
        <form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Contact {petSitterName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Input
                id="message"
                name="message"
                height="50px"
                focusBorderColor="#00C38A"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Leave your message here"
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" type="submit">
                Send
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default ContactModal;

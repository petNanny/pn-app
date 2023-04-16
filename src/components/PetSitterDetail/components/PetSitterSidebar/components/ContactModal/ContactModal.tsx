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
  useToast,
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
  const toast = useToast();
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      try {
        sendMessage({
          body: {
            conversationId: conversationData._id,
            sender: senderId,
            text: values.message,
          },
        });
        formik.resetForm();
        onClose();
        toast({
          title: `Your message has been send to ${petSitterName}.`,
          description: "You can check your messages on message page.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      } catch (error) {
        toast({
          title: `Failed to contact with ${petSitterName}.`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
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
              <Button backgroundColor="#00C38A" color="white" mr={3} type="submit">
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

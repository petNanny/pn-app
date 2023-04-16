import { Stack, Button, useToast } from "@chakra-ui/react";
import AbnForm from "./AbnForm/AbnForm";
import BankAccountForm from "./BankAccountForm/BankAccountForm";
import { useFormik } from "formik";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useParams } from "react-router-dom";
import paymentMethodValidator from "./paymentMethodValidator";

const PaymentForm = () => {
  const toast = useToast();
  const { id } = useParams();
  const { data, refetch } = useGetOnePetOwnerQuery(id);
  const petSitter = data.petSitter;
  const [updatePaymentInfo] = useUpdateOnePetSitterMutation();

  const { values, handleChange, handleSubmit, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      abn: "",
      bsb: "",
      accountNumber: "",
    },
    validationSchema: paymentMethodValidator,
    onSubmit: (values) => {
      try {
        updatePaymentInfo({
          ...petSitter,
          abn: values.abn,
          bankAccount: {
            bsb: values.bsb,
            accountNumber: values.accountNumber,
          },
        });
        toast({
          title: "Payment method changed.",
          description: "We've changed your payment method for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        refetch();
      } catch (error) {
        toast({
          title: "Payment method changed failure.",
          description: "We can't change your payment method.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="4">
        <AbnForm
          values={values.abn}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
        />
        <BankAccountForm
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
        />
        <Button type="submit" bg="#00C38A" color="#ffffff" padding="2.5" height="50px">
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default PaymentForm;

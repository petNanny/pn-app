import { FormControl, FormLabel, Select, Stack, Text, Divider } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import { useFormik } from "formik";
import { useGetOnePetOwnerQuery } from "../../../../redux/petOwnerApi";
import { useParams } from "react-router-dom";
const CancellationPolicyForm = (handleGetPolicy: any) => {
  const { id } = useParams();
  const { data } = useGetOnePetOwnerQuery(id);

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      policy: data.petSitter.policy,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleGetPolicy(values.policy);
    },
  });
  return (
    <FormWrapper title="Cancellation policy">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel fontWeight="md" color="#747474">
            Cancellation policy
          </FormLabel>
          <Select
            color="#747474"
            height="50px"
            focusBorderColor="#00C38A"
            // value={values.policy}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="flexible" label="flexible">
              Flexible
            </option>
            <option value="moderate" label="moderate">
              Moderate
            </option>
          </Select>
        </FormControl>
      </form>
      <Stack spacing="4" marginTop="4">
        <Text color="#747474">
          Full refund if canceled before 12:00 p.m. one day before the booking, 50% refund
          afterward.
        </Text>
        <Text color="#747474">
          No refund is payable if the booking is canceled on or after the start date.
        </Text>
        <Divider />
        <Text fontSize="sm" color="#939393">
          Note: All times are based on the sitter’s time zone
        </Text>
      </Stack>
    </FormWrapper>
  );
};

export default CancellationPolicyForm;

import { Flex, Button, useToast } from "@chakra-ui/react";
import ServicesForm from "./ServicesForm/ServicesForm";
import AdditionalServicesForm from "./AdditionalServicesForm/AdditionalServicesForm";
import CancellationPolicyForm from "./CancellationPolicyForm/CancellationPolicyForm";
import { useFormik } from "formik";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useParams } from "react-router-dom";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useDispatch } from "react-redux";
import { updatePetOwnerInfo } from "../../../store/reducer/petOwnerSlice";

const PetServiceForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { id } = useParams();
  const { data } = useGetOnePetOwnerQuery(id);

  const petSitter = data.petSitter;
  console.log(petSitter);
  const [updateServices] = useUpdateOnePetSitterMutation();
  const { values, handleSubmit, handleChange, handleBlur, setFieldValue } = useFormik({
    initialValues: {
      service: data.petSitter.service,
      additionalService: data.petSitter.additionalService,
      policy: data.petSitter.policy,
    },
    onSubmit: (values) => {
      try {
        updateServices({ ...petSitter, ...values });
        //will change later
        //dispatch(updatePetOwnerInfo({ ...petSitter, ...values }));
        toast({
          title: "Services changed.",
          description: "We've changed your service details for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      } catch (error) {
        toast({
          title: "Services changed failure.",
          description: "We can't change your service details.",
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
      <Flex flexDirection="column" gap="8" width="100%">
        <ServicesForm
          setFieldValue={setFieldValue}
          handleBlur={handleBlur}
          values={values.service}
        />
        <AdditionalServicesForm
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleBlur={handleBlur}
          values={values.additionalService}
        />
        <CancellationPolicyForm
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values.policy}
        />
        <Button backgroundColor="#00C38A" color="#ffffff" height="50px" type="submit">
          Save
        </Button>
      </Flex>
    </form>
  );
};

export default PetServiceForm;

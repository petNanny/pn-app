import { Stack } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import ExpandCheckBox from "../ExpandCheckBox";
import {
  DOG_BOARDING_RATE_DETAILS,
  DOGGY_DAY_CARE_RATE_DETAILS,
  DOG_WALKING_CARE_RATE_DETAILS,
  ONE_HOME_VISIT_RATE_DETAILS,
  TWO_HOME_VISIT_RATE_DETAILS,
  HOUSE_SITTING_RATE_DETAILS,
} from "../PetServiceForm.constant";

const ServicesForm = () => {
  return (
    <FormWrapper title="Services">
      <Stack spacing="4">
        <ExpandCheckBox
          serviceTitle="Dog boarding"
          serviceDesc="Overnight pet stay at sitter's home"
          serviceRateDetails={DOG_BOARDING_RATE_DETAILS}
        />
        <ExpandCheckBox
          serviceTitle="Doggy day care"
          serviceDesc="Daytime care at the sitter's home"
          serviceRateDetails={DOGGY_DAY_CARE_RATE_DETAILS}
        />
        <ExpandCheckBox
          serviceTitle="Dog walking"
          serviceDesc="Walking and spending time with the dog"
          serviceRateDetails={DOG_WALKING_CARE_RATE_DETAILS}
        />
        <ExpandCheckBox
          serviceTitle="1x Home visit"
          serviceDesc="One drop-in visit to pet owner's home"
          serviceRateDetails={ONE_HOME_VISIT_RATE_DETAILS}
        />
        <ExpandCheckBox
          serviceTitle="2x Home visit"
          serviceDesc="Two drop-in visits to pet owner's home"
          serviceRateDetails={TWO_HOME_VISIT_RATE_DETAILS}
        />
        <ExpandCheckBox
          serviceTitle="House sitting"
          serviceDesc="Overnight sitter stay at the owner's home"
          serviceRateDetails={HOUSE_SITTING_RATE_DETAILS}
        />
      </Stack>
    </FormWrapper>
  );
};

export default ServicesForm;

import { Stack } from "@chakra-ui/react";
import { useMemo, useCallback } from "react";
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

const ServicesForm = ({ setFieldValue, values: services, errors, touched }: any) => {
  const servicesMap = useMemo(() => {
    return services.reduce((acc: any, service: any) => {
      return {
        ...acc,
        [service.service]: service,
      };
    }, {});
  }, [services]);

  const handleServiceUpdate = useCallback(
    (field: string, updatedValues: any) => {
      const updatedServiceMap = {
        ...servicesMap,
        [field]: updatedValues,
      };

      setFieldValue("service", Object.values(updatedServiceMap));
    },
    [servicesMap]
  );

  return (
    <FormWrapper title="Services">
      <Stack spacing="4">
        <ExpandCheckBox
          serviceTitle="Dog boarding"
          serviceDesc="Overnight pet stay at sitter's home"
          serviceRateDetails={DOG_BOARDING_RATE_DETAILS}
          onChange={(updatedValues: any) => handleServiceUpdate("Dog boarding", updatedValues)}
          values={servicesMap["Dog boarding"]}
        />
        <ExpandCheckBox
          serviceTitle="Doggy day care"
          serviceDesc="Daytime care at the sitter's home"
          serviceRateDetails={DOGGY_DAY_CARE_RATE_DETAILS}
          onChange={(updatedValues: any) => handleServiceUpdate("Doggy day care", updatedValues)}
          values={servicesMap["Doggy day care"]}
        />
        <ExpandCheckBox
          serviceTitle="Dog walking"
          serviceDesc="Walking and spending time with the dog"
          serviceRateDetails={DOG_WALKING_CARE_RATE_DETAILS}
          onChange={(updatedValues: any) => handleServiceUpdate("Dog walking", updatedValues)}
          values={servicesMap["Dog walking"]}
        />
        <ExpandCheckBox
          serviceTitle="1x Home visit"
          serviceDesc="One drop-in visit to pet owner's home"
          serviceRateDetails={ONE_HOME_VISIT_RATE_DETAILS}
          onChange={(updatedValues: any) => handleServiceUpdate("1x Home visit", updatedValues)}
          values={servicesMap["1x Home visit"]}
        />
        <ExpandCheckBox
          serviceTitle="2x Home visit"
          serviceDesc="Two drop-in visits to pet owner's home"
          serviceRateDetails={TWO_HOME_VISIT_RATE_DETAILS}
          onChange={(updatedValues: any) => handleServiceUpdate("2x Home visit", updatedValues)}
          values={servicesMap["2x Home visit"]}
        />
        <ExpandCheckBox
          serviceTitle="House sitting"
          serviceDesc="Overnight sitter stay at the owner's home"
          serviceRateDetails={HOUSE_SITTING_RATE_DETAILS}
          onChange={(updatedValues: any) => handleServiceUpdate("House sitting", updatedValues)}
          values={servicesMap["House sitting"]}
        />
      </Stack>
    </FormWrapper>
  );
};

export default ServicesForm;

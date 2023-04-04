import FormWrapper from "../../FormWrapper/FormWrapper";
import LanguageCheckBox from "../LanguageCheckBox";
import { LANGUAGES_LIST } from "./LanguageForm.constant";

const LanguageForm = (props: any) => {
  return (
    <FormWrapper title="I speak these languages">
      <LanguageCheckBox
        languages={LANGUAGES_LIST}
        values={props.values}
        setFieldValue={props.setFieldValue}
      />
    </FormWrapper>
  );
};

export default LanguageForm;

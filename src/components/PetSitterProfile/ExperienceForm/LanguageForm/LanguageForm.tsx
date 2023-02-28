import FormWrapper from "../../FormWrapper/FormWrapper";
import LanguageCheckBox from "../LanguageCheckBox";
import { LANGUAGES_LIST } from "./LanguageForm.constant";

const LanguageForm = () => {
  return (
    <FormWrapper title="I speak these languages">
      <LanguageCheckBox languages={LANGUAGES_LIST} />
    </FormWrapper>
  );
};

export default LanguageForm;

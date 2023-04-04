import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

interface Ilanguages {
  languages: string[];
  values: string[];
  setFieldValue: any;
}

const LanguageCheckBox = ({ languages, values, setFieldValue }: Ilanguages) => {
  const handleLanguageUpdate = (event: any) => {
    if (values.includes(event.target.value)) {
      setFieldValue(
        "languages",
        values.filter((language: string) => language !== event.target.value)
      );
    } else {
      setFieldValue("languages", [...values, event.target.value]);
    }
  };
  return (
    <CheckboxGroup colorScheme="green" size="lg" defaultValue={values}>
      <Stack>
        {languages.map((language: string) => (
          <Checkbox
            name={language}
            cursor="pointer"
            color="#747474"
            key={language}
            value={language}
            onChange={handleLanguageUpdate}
          >
            {language}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default LanguageCheckBox;

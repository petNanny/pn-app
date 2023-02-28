import { Checkbox, Stack } from "@chakra-ui/react";

interface Ilanguages {
  languages: string[];
}
const LanguageCheckBox = ({ languages }: Ilanguages) => {
  return (
    <Stack>
      {languages.map((language: string) => (
        <Checkbox cursor="pointer" colorScheme="green" size="lg" color="#747474" key={language}>
          {language}
        </Checkbox>
      ))}
    </Stack>
  );
};

export default LanguageCheckBox;

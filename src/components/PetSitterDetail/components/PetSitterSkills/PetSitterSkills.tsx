import { Box } from "@chakra-ui/react";
import {
  SkillsHeader,
  SkillBox,
  SkillText,
  StyledIcon,
  SkillDescription,
} from "./styledPetSitterSkills";
import {
  MdOutlinePets,
  MdOutlineLanguage,
  MdOutlineAutoAwesome,
  MdOutlineVolunteerActivism,
  MdOutlineLocalHospital,
  MdErrorOutline,
} from "react-icons/md";

interface PetSitterValues {
  petSitterSkills: {
    expWithBehavioralProblems: boolean;
    expWithRescuePets: boolean;
    familiarWithDogTrainingTechs: boolean;
    expAsVolunteer: boolean;
    skillsDescription: string;
    years: string;
  };
  petSitterLanguages: string[];
}

const PetSitterSkills = ({ petSitterSkills, petSitterLanguages }: PetSitterValues) => {
  let LanguagesBox;
  if (petSitterLanguages.length > 1) {
    LanguagesBox = (
      <SkillText>
        I speak {petSitterLanguages[0]} & {petSitterLanguages[1]}{" "}
        {petSitterLanguages.length > 2 && "and more"}
      </SkillText>
    );
  } else if (petSitterLanguages.length === 1) {
    LanguagesBox = <SkillText>I speak {petSitterLanguages[0]}</SkillText>;
  }

  return (
    <>
      <Box marginBottom="1rem">
        <SkillsHeader as="h3">Specific Skills</SkillsHeader>
        <Box display="flex" flexWrap="wrap">
          {petSitterLanguages.length > 0 && (
            <SkillBox>
              <StyledIcon as={MdOutlineLanguage} />
              {LanguagesBox}
            </SkillBox>
          )}
          <SkillBox>
            <StyledIcon as={MdOutlineAutoAwesome} />
            <SkillText>{petSitterSkills.years} year(s) of experience</SkillText>
          </SkillBox>
          {petSitterSkills.familiarWithDogTrainingTechs && (
            <SkillBox>
              <StyledIcon as={MdOutlinePets} />
              <SkillText>Familiar with dog training techniques</SkillText>
            </SkillBox>
          )}
          {petSitterSkills.skillsDescription && (
            <SkillDescription>{petSitterSkills.skillsDescription}</SkillDescription>
          )}
        </Box>
      </Box>
      <Box marginBottom="1rem">
        <SkillsHeader as="h3">Experience with</SkillsHeader>
        <Box display="flex" flexWrap="wrap">
          {petSitterSkills.expAsVolunteer && (
            <SkillBox>
              <StyledIcon as={MdOutlineVolunteerActivism} />
              <SkillText>Animal welfare as a volunteer</SkillText>
            </SkillBox>
          )}
          {petSitterSkills.expWithRescuePets && (
            <SkillBox>
              <StyledIcon as={MdOutlineLocalHospital} />
              <SkillText>Rescuing pets</SkillText>
            </SkillBox>
          )}
          {petSitterSkills.expWithBehavioralProblems && (
            <SkillBox>
              <StyledIcon as={MdErrorOutline} />
              <SkillText>Behavioral problems</SkillText>
            </SkillBox>
          )}
          {!petSitterSkills.expAsVolunteer &&
            !petSitterSkills.expWithRescuePets &&
            !petSitterSkills.expWithBehavioralProblems && <SkillText>N/A</SkillText>}
        </Box>
      </Box>
    </>
  );
};

export default PetSitterSkills;

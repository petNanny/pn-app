import { Box } from "@chakra-ui/react";
import {
  HomeSubTitle,
  AcceptedPetBox,
  AboutHomeIcon,
  AcceptedPetTitle,
  AcceptedPetInfo,
  PetSitterHomeBox,
  HomeInfo,
} from "./styledPetSitterHome";
import { GiRabbit, GiHighGrass } from "react-icons/gi";
import { FaDog, FaCat, FaChild } from "react-icons/fa";
import { TbFence } from "react-icons/tb";

interface PetSitterValues {
  petSitterName: string;
  petSitterPreference: {
    age: [string];
    size: [string];
    petTypes: [string];
  };
  petSitterHome: {
    propertyType: string;
    outDoorArea: string;
    fenced: boolean;
    kids: string;
  };
  petSitterWalkingAreas: [string];
}

const PetSitterHome = ({
  petSitterName,
  petSitterPreference,
  petSitterHome,
  petSitterWalkingAreas,
}: PetSitterValues) => {
  if (!petSitterPreference) {
    return (
      <>
        <Box marginBottom="1rem">
          <HomeSubTitle>Accepted pets</HomeSubTitle>
        </Box>
        <Box marginBottom="1rem">
          <HomeSubTitle>{petSitterName}&apos;s home</HomeSubTitle>
        </Box>
      </>
    );
  }

  const dogSizes = [];
  if (petSitterPreference.size.includes("Small")) {
    dogSizes.push({ size: "Small", info: "0-10kg" });
  }
  if (petSitterPreference.size.includes("Medium")) {
    dogSizes.push({ size: "Medium", info: "10-20kg" });
  }
  if (petSitterPreference.size.includes("Large")) {
    dogSizes.push({ size: "Large", info: "20-40kg" });
  }
  if (petSitterPreference.size.includes("Giant")) {
    dogSizes.push({ size: "Giant", info: ">40kg" });
  }

  const dogAges = [];
  if (petSitterPreference.age.includes("Young")) {
    dogAges.push({ age: "Young", info: "1-3 year" });
  }
  if (petSitterPreference.age.includes("Adult")) {
    dogAges.push({ age: "Adult", info: "3-8 years" });
  }
  if (petSitterPreference.age.includes("Senior")) {
    dogAges.push({ age: "Senior", info: "8+ years" });
  }

  const leashedAreas = petSitterWalkingAreas.filter((area) => area !== "Nearby Off-Leash Area");
  const leashedAreasString = leashedAreas.join(", ");

  return (
    <>
      <Box marginBottom="1rem">
        <HomeSubTitle>Accepted pets</HomeSubTitle>
        <Box display="flex" flexWrap="wrap">
          {petSitterPreference.age.includes("Puppies") && (
            <AcceptedPetBox>
              <AboutHomeIcon as={FaDog} />
              <AcceptedPetTitle>Puppies</AcceptedPetTitle>
              <AcceptedPetInfo>&lt; 1 year</AcceptedPetInfo>
            </AcceptedPetBox>
          )}
          {dogSizes.map((size) => {
            if (!size) {
              return;
            } else {
              return (
                <AcceptedPetBox key={size.size}>
                  <AboutHomeIcon as={FaDog} />
                  <AcceptedPetTitle>{size.size} dog</AcceptedPetTitle>
                  <AcceptedPetInfo>{size.info}</AcceptedPetInfo>
                </AcceptedPetBox>
              );
            }
          })}
          {dogAges.map((age) => {
            if (!age) {
              return;
            } else {
              return (
                <AcceptedPetBox key={age.age}>
                  <AboutHomeIcon as={FaDog} />
                  <AcceptedPetTitle>{age.age} dog</AcceptedPetTitle>
                  <AcceptedPetInfo>{age.info}</AcceptedPetInfo>
                </AcceptedPetBox>
              );
            }
          })}
          {petSitterPreference.petTypes.includes("Cats") && (
            <AcceptedPetBox>
              <AboutHomeIcon as={FaCat} />
              <AcceptedPetTitle>Cats</AcceptedPetTitle>
              <AcceptedPetInfo>all kinds</AcceptedPetInfo>
            </AcceptedPetBox>
          )}
          {petSitterPreference.petTypes.includes("Small animals") && (
            <AcceptedPetBox>
              <AboutHomeIcon as={GiRabbit} />
              <AcceptedPetTitle>Small animals</AcceptedPetTitle>
              <AcceptedPetInfo>rodents, rabbits, ...</AcceptedPetInfo>
            </AcceptedPetBox>
          )}
        </Box>
      </Box>
      <Box marginBottom="1rem">
        <HomeSubTitle>{petSitterName}&apos;s home</HomeSubTitle>
        <Box display="flex" flexWrap="wrap">
          {petSitterHome.outDoorArea || petSitterHome.outDoorArea !== "None" ? (
            <PetSitterHomeBox>
              <AboutHomeIcon as={GiHighGrass} />
              <HomeInfo>A {petSitterHome.outDoorArea} outdoor area</HomeInfo>
            </PetSitterHomeBox>
          ) : null}
          {petSitterHome.fenced ? (
            <PetSitterHomeBox>
              <AboutHomeIcon as={TbFence} />
              <HomeInfo>A fully fenced backyard</HomeInfo>
            </PetSitterHomeBox>
          ) : null}
          {petSitterHome.kids === "None" ? (
            <PetSitterHomeBox>
              <AboutHomeIcon as={FaChild} />
              <HomeInfo>Has no kids</HomeInfo>
            </PetSitterHomeBox>
          ) : (
            <PetSitterHomeBox>
              <AboutHomeIcon as={FaChild} />
              <HomeInfo>Has kid {petSitterHome.kids.toLowerCase()}</HomeInfo>
            </PetSitterHomeBox>
          )}
        </Box>
        <Box marginBottom="1rem">
          <HomeSubTitle>Walking areas</HomeSubTitle>
          <Box display="flex" flexWrap="wrap">
            {petSitterWalkingAreas.includes("Nearby Off-Leash Area") && (
              <PetSitterHomeBox>
                <AboutHomeIcon as={FaDog} />
                <HomeInfo>Nearby off-leash area</HomeInfo>
              </PetSitterHomeBox>
            )}
            {leashedAreas.length !== 0 && (
              <PetSitterHomeBox>
                <AboutHomeIcon as={FaDog} />
                <HomeInfo>{leashedAreasString}</HomeInfo>
              </PetSitterHomeBox>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PetSitterHome;

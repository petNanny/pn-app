import {
  ProfileContentContainer,
  PetSitterPageContainer,
  ProfileDetailSection,
  ProfileDetailSectionHeading,
} from "./styledPetSitterDetail";
import PetSitterGallery from "./components/PetSitterGallery/PetSitterGallery";
import PetSitterMobileHeader from "./components/PetSitterMobileHeader/PetSitterMobileHeader";
import PetSitterSkills from "./components/PetSitterSkills/PetSitterSkills";
import { useGetOnePetSitterQuery } from "../../redux/petSitterApi";
import { useParams, Navigate } from "react-router-dom";
import PetSitterCalendar from "./components/PetSitterCalendar/PetSitterCalendar";
import PetSitterServices from "./components/PetSitterServices/PetSitterServices";
import PetSitterSidebar from "./components/PetSitterSidebar/PetSitterSidebar";
import PetSitterHome from "./components/PetSitterHome/PetSitterHome";
import PetSitterDescription from "./components/PetSitterDescription/PetSitterDescription";
import { Box } from "@chakra-ui/react";
import PetSitterMobileService from "./components/PetSitterMobileService/PetSitterMobileService";

const PetSitterDetail = () => {
  const { id } = useParams();
  const { data: petSitterData, isLoading: isPetSitterLoading } = useGetOnePetSitterQuery(id);

  let petSitterName,
    petSitterAvatar,
    petSitterIntro,
    petSitterSuburb,
    petSitterId,
    petSitterSkills,
    petSitterLanguages,
    petSitterServices,
    petSitterCancelPolicy,
    petSitterAdditionalServices,
    petSitterPreference,
    petSitterHome,
    petSitterWalkingAreas,
    petSitterCoordinates,
    petSitterDescription,
    petSitterNotAvailableDates;

  if (isPetSitterLoading) return <div>Loading...</div>;

  if (petSitterData) {
    ({
      petOwner: { userName: petSitterName, avatar: petSitterAvatar },
      introduction: petSitterIntro,
      address: { city: petSitterSuburb },
      _id: petSitterId,
      experience: petSitterSkills,
      languages: petSitterLanguages,
      notAvailableDates: petSitterNotAvailableDates,
      service: petSitterServices,
      policy: petSitterCancelPolicy,
      additionalService: petSitterAdditionalServices,
      preference: petSitterPreference,
      home: petSitterHome,
      walkingAreas: petSitterWalkingAreas,
      geoCode: { coordinates: petSitterCoordinates },
      description: petSitterDescription,
    } = petSitterData);
  } else {
    return <Navigate to="/error" replace />;
  }

  return (
    <>
      <PetSitterPageContainer>
        <ProfileContentContainer>
          <PetSitterGallery petSitterName={petSitterName} petSitterId={petSitterId} />
          <PetSitterMobileHeader
            petSitterAvatar={petSitterAvatar}
            petSitterName={petSitterName}
            petSitterIntro={petSitterIntro}
            petSitterSuburb={petSitterSuburb}
          />
          <PetSitterMobileService petSitterServices={petSitterServices} />
          <Box borderTop="1px solid rgb(206, 206, 206)" margin="1.3rem 0 1rem"></Box>
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">About {petSitterName}</ProfileDetailSectionHeading>
            <PetSitterDescription petSitterDescription={petSitterDescription} />
          </ProfileDetailSection>
          <ProfileDetailSection id="services">
            <ProfileDetailSectionHeading as="h2">
              {petSitterName}&apos;s services
            </ProfileDetailSectionHeading>
            <PetSitterServices
              petSitterServices={petSitterServices}
              petSitterAdditionalServices={petSitterAdditionalServices}
              petSitterName={petSitterName}
            />
          </ProfileDetailSection>
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">Availability</ProfileDetailSectionHeading>
            <PetSitterCalendar petSitterNotAvailableDates={petSitterNotAvailableDates} />
          </ProfileDetailSection>
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">
              About {petSitterName}&apos;s home
            </ProfileDetailSectionHeading>
            <PetSitterHome
              petSitterName={petSitterName}
              petSitterPreference={petSitterPreference}
              petSitterHome={petSitterHome}
              petSitterWalkingAreas={petSitterWalkingAreas}
              petSitterCoordinates={petSitterCoordinates}
            />
          </ProfileDetailSection>
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">Skills</ProfileDetailSectionHeading>
            <PetSitterSkills
              petSitterSkills={petSitterSkills}
              petSitterLanguages={petSitterLanguages}
            />
          </ProfileDetailSection>
        </ProfileContentContainer>
        <PetSitterSidebar
          petSitterAvatar={petSitterAvatar}
          petSitterName={petSitterName}
          petSitterIntro={petSitterIntro}
          petSitterSuburb={petSitterSuburb}
          petSitterServices={petSitterServices}
          petSitterCancelPolicy={petSitterCancelPolicy}
        />
      </PetSitterPageContainer>
    </>
  );
};

export default PetSitterDetail;

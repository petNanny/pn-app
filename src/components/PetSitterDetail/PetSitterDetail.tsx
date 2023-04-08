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
import PetSitterPets from "./components/PetSitterPets/PetSitterPets";

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
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">Skills</ProfileDetailSectionHeading>
            <PetSitterSkills
              petSitterSkills={petSitterSkills}
              petSitterLanguages={petSitterLanguages}
            />
          </ProfileDetailSection>
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">Availability</ProfileDetailSectionHeading>
            <PetSitterCalendar petSitterNotAvailableDates={petSitterNotAvailableDates} />
          </ProfileDetailSection>
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">
              {petSitterName}&apos;s Pets
            </ProfileDetailSectionHeading>
            <PetSitterPets />
          </ProfileDetailSection>
        </ProfileContentContainer>
      </PetSitterPageContainer>
    </>
  );
};

export default PetSitterDetail;

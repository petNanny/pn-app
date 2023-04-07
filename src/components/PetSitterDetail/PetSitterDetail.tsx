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
            <ProfileDetailSectionHeading as="h2">About {petSitterName}</ProfileDetailSectionHeading>
          </ProfileDetailSection>
          <ProfileDetailSection id="services">
            <ProfileDetailSectionHeading as="h2">
              {petSitterName}&apos;s services
            </ProfileDetailSectionHeading>
            <PetSitterServices petSitterServices={petSitterServices} />
          </ProfileDetailSection>
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

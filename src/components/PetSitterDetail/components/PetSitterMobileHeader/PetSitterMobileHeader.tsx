import { Image } from "@chakra-ui/react";
import {
  MobileHeaderContainer,
  MobileHeaderAvatar,
  MobileHeaderPetSitterInfo,
  SavedForFavoriteBtn,
  MobileHeaderIntro,
  MobileHeaderSuburb,
} from "./styledPetSitterMobileHeader";
import redHollowHeart from "../../../../assets/Icons/redHollowHeart.svg";

interface MobileHeaderValues {
  petSitterAvatar: string;
  petSitterName: string;
  petSitterIntro: string;
  petSitterSuburb: string;
}

const PetSitterMobileHeader = ({
  petSitterAvatar,
  petSitterName,
  petSitterIntro,
  petSitterSuburb,
}: MobileHeaderValues) => {
  return (
    <>
      <MobileHeaderContainer>
        <MobileHeaderAvatar name={petSitterName} src={petSitterAvatar} />
        <MobileHeaderPetSitterInfo>
          <SavedForFavoriteBtn>
            <Image src={redHollowHeart} />
          </SavedForFavoriteBtn>
          <MobileHeaderIntro as="h2">{petSitterIntro}</MobileHeaderIntro>
          <MobileHeaderSuburb>{petSitterSuburb}</MobileHeaderSuburb>
        </MobileHeaderPetSitterInfo>
      </MobileHeaderContainer>
    </>
  );
};

export default PetSitterMobileHeader;

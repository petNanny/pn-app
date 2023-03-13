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
  userAvatar: string;
  userName: string;
  userIntro: string;
  userSuburb: string;
}

const PetSitterMobileHeader = ({
  userAvatar,
  userName,
  userIntro,
  userSuburb,
}: MobileHeaderValues) => {
  return (
    <>
      <MobileHeaderContainer>
        <MobileHeaderAvatar name={userName} src={userAvatar} />
        <MobileHeaderPetSitterInfo>
          <SavedForFavoriteBtn>
            <Image src={redHollowHeart} />
          </SavedForFavoriteBtn>
          <MobileHeaderIntro as="h2">{userIntro}</MobileHeaderIntro>
          <MobileHeaderSuburb>{userSuburb}</MobileHeaderSuburb>
        </MobileHeaderPetSitterInfo>
      </MobileHeaderContainer>
    </>
  );
};

export default PetSitterMobileHeader;

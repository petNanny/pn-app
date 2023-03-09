import { Box, Image } from "@chakra-ui/react";
import imageNotFound from "../../assets/temps/imageNotFound.jpg";
import {
  PetSitterGalleryContainer,
  ProfileContentContainer,
  PetSitterPageContainer,
  PetSitterGalleryImageContainer,
  CoverImage,
  BackImage,
  MoreImagesBtn,
  ImageTitle,
} from "./styledPetSitterPagePetSitterProfile";
import { useGetPetSitterImagesQuery } from "../../redux/api/attachmentApi";
import { TEST_PET_SITTER_ID } from "../../utils/constants";
import { useEffect, useState } from "react";

interface Image {
  _id: string;
  url: string;
  fileName: string;
  petSitterId: string;
}

const PetSitterPagePetSitterProfile = () => {
  const defaultImage = {
    _id: "1",
    url: imageNotFound,
    fileName: "image not found",
    petSitterId: TEST_PET_SITTER_ID,
  };
  const [getImages, setGetImages] = useState<Image[]>([defaultImage]);

  const { data: petSitterData, isLoading: isProfileImageLoading } =
    useGetPetSitterImagesQuery(TEST_PET_SITTER_ID);

  useEffect(() => {
    if (petSitterData !== undefined && petSitterData.images !== undefined) {
      setGetImages(petSitterData.images);
    }
  }, [petSitterData]);

  return (
    <>
      <PetSitterPageContainer>
        <ProfileContentContainer>
          <PetSitterGalleryContainer>
            <PetSitterGalleryImageContainer>
              <Box>
                <CoverImage src={getImages[0].url} alt={getImages[0].fileName} />
                <BackImage src={getImages[0].url} alt={getImages[0].fileName} />
              </Box>
              <MoreImagesBtn>See more ({getImages.length})</MoreImagesBtn>
            </PetSitterGalleryImageContainer>
            <ImageTitle as="h1">Tong</ImageTitle>
          </PetSitterGalleryContainer>
        </ProfileContentContainer>
      </PetSitterPageContainer>
    </>
  );
};

export default PetSitterPagePetSitterProfile;

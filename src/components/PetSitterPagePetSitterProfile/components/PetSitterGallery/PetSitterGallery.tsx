import { Box } from "@chakra-ui/react";
import imageNotFound from "../../../../assets/temps/imageNotFound.jpg";
import {
  PetSitterGalleryContainer,
  PetSitterGalleryImageContainer,
  CoverImage,
  BackImage,
  MoreImagesBtn,
  ImageTitle,
  LoadingBox,
} from "./styledPetSitterGallery";
import { useUserGetPetSitterImagesQuery } from "../../../../redux/imageApi";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { extractIdFromURL } from "../../../../utils/common";
import { useLocation } from "react-router-dom";

interface userName {
  userName: string;
}

interface PetSitterImageValue {
  _id: string;
  url: string;
  fileName: string;
  petSitterId: string;
}

const PetSitterGallery = ({ userName }: userName) => {
  const [imageGalleryOpen, setImageGalleryOpen] = useState(false);

  const location = useLocation();
  const petSitterId = extractIdFromURL(location.pathname);

  const { data: petSitterImages, isLoading: isPetSitterImagesLoading } =
    useUserGetPetSitterImagesQuery(petSitterId);

  let slides: any = [],
    coverImage,
    backImage,
    imagesLength;
  if (petSitterImages) {
    if (petSitterImages.length === 0) {
      coverImage = imageNotFound;
      backImage = imageNotFound;
      imagesLength = 0;
    } else {
      coverImage = petSitterImages[0].url;
      backImage = petSitterImages[0].url;
      imagesLength = petSitterImages.length;
    }
    slides = petSitterImages.map((image: PetSitterImageValue) => {
      return { ...image, src: image.url, url: undefined };
    });
  }

  const handleMoreImgBtn = () => {
    if (petSitterImages.length > 0) {
      return setImageGalleryOpen(true);
    }
  };

  const handleImageGalleryCloseBtn = () => {
    setImageGalleryOpen(false);
  };

  return (
    <>
      <PetSitterGalleryContainer>
        <PetSitterGalleryImageContainer>
          {isPetSitterImagesLoading ? (
            <LoadingBox isIndeterminate color="green.300" />
          ) : (
            <Box>
              <CoverImage src={coverImage} alt={userName} />
              <BackImage src={backImage} alt={userName} />
            </Box>
          )}
          <MoreImagesBtn onClick={handleMoreImgBtn}>See more ({imagesLength})</MoreImagesBtn>
          <Lightbox
            open={imageGalleryOpen}
            close={handleImageGalleryCloseBtn}
            slides={slides}
            carousel={{ imageFit: "contain" }}
          />
        </PetSitterGalleryImageContainer>
        <ImageTitle as="h1">{userName}</ImageTitle>
      </PetSitterGalleryContainer>
    </>
  );
};

export default PetSitterGallery;

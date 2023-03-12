import { Box, Image } from "@chakra-ui/react";
import imageNotFound from "../../../../assets/temps/imageNotFound.jpg";
import {
  PetSitterGalleryContainer,
  PetSitterGalleryImageContainer,
  CoverImage,
  BackImage,
  MoreImagesBtn,
  ImageTitle,
} from "./styledPetSitterGallery";
import { useUserGetPetSitterImagesQuery } from "../../../../redux/imageApi";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { extractIdFromURL } from "../../../../utils/common";
import { useLocation } from "react-router-dom";

interface Image {
  _id: string;
  url: string;
  fileName: string;
  petSitterId: string;
}

const PetSitterGallery = () => {
  const defaultImage = {
    _id: "1",
    url: imageNotFound,
    fileName: "image not found",
    petSitterId: "0",
  };
  const [getImages, setGetImages] = useState<Image[]>([defaultImage]);
  const [imageGalleryOpen, setImageGalleryOpen] = useState(false);

  const location = useLocation();
  const petSitterId = extractIdFromURL(location.pathname);

  const { data: petSitterImages } = useUserGetPetSitterImagesQuery(petSitterId);

  useEffect(() => {
    if (petSitterImages !== undefined) {
      setGetImages(petSitterImages);
    }
  }, [petSitterImages]);

  const slides = getImages.map((image) => {
    return { ...image, src: image.url, url: undefined };
  });

  const handleMoreImgBtn = () => {
    setImageGalleryOpen(true);
  };

  const handleImageGalleryCloseBtn = () => {
    setImageGalleryOpen(false);
  };

  return (
    <>
      <PetSitterGalleryContainer>
        <PetSitterGalleryImageContainer>
          <Box>
            <CoverImage src={getImages[0].url} alt={getImages[0].fileName} />
            <BackImage src={getImages[0].url} alt={getImages[0].fileName} />
          </Box>
          <MoreImagesBtn onClick={handleMoreImgBtn}>See more ({getImages.length})</MoreImagesBtn>
          <Lightbox
            open={imageGalleryOpen}
            close={handleImageGalleryCloseBtn}
            slides={slides}
            carousel={{ imageFit: "contain" }}
          />
        </PetSitterGalleryImageContainer>
        <ImageTitle as="h1">Tong</ImageTitle>
      </PetSitterGalleryContainer>
    </>
  );
};

export default PetSitterGallery;

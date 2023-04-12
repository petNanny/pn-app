import {
  PetSitterHomeMapContainer,
  PetSitterHomeMapImg,
  PetSitterHomeMapCircle,
} from "./styledPetSitterHome";

interface petSitterValue {
  petSitterCoordinates: number[];
}

const PetSitterHomeMap = ({ petSitterCoordinates: [longitude, latitude] }: petSitterValue) => {
  const imgSrc =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    latitude +
    "," +
    longitude +
    "&zoom=12&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&key=" +
    process.env.REACT_APP_GOOGLE_MAP_KEY;

  return (
    <PetSitterHomeMapContainer>
      <PetSitterHomeMapCircle />
      <PetSitterHomeMapImg src={imgSrc} alt="petter's home area" />
    </PetSitterHomeMapContainer>
  );
};

export default PetSitterHomeMap;

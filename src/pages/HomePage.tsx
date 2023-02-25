//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar/SearchBar";
import PetSitterCard from "../components/PetSitterCard/PetSitterCard";
import GoogleMap from "../components/GoogleMap";

const HomePage = () => {
  return (
    <>
      <SearchBar />

      <GoogleMap />
    </>
  );
};

export default HomePage;

//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar";
import PetSitterCardList from "../components/UserCard/PetSitterCardList/PetSitterCardList";
import GoogleMap from "../components/GoogleMap";

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <PetSitterCardList />
      <GoogleMap />
    </>
  );
};

export default HomePage;

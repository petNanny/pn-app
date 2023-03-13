//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar/SearchBar";
import GoogleMap from "../components/GoogleMap";
import PageLayout from "../components/Layout/PageLayout";
import PetSitterCardList from "../components/userCard/PetSitterCardList/PetSitterCardList";

const HomePage = () => {
  return (
    <PageLayout>
      <SearchBar />
      <PetSitterCardList />
      <GoogleMap />
    </PageLayout>
  );
};

export default HomePage;

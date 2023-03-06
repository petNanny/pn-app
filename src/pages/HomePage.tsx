//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar/SearchBar";
import GoogleMap from "../components/GoogleMap";
import PageLayout from "../components/Layout/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <SearchBar />
      <GoogleMap />
    </PageLayout>
  );
};

export default HomePage;

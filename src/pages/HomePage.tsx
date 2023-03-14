//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar/SearchBar";
import GoogleMap from "../components/GoogleMap";
import PageLayout from "../components/Layout/PageLayout";
import PetSitterCardList from "../components/userCard/PetSitterCardList/PetSitterCardList";
import { Layout } from "../components/Layout/styledPageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <SearchBar />
      <Layout>
        <PetSitterCardList />
        <GoogleMap />
      </Layout>
    </PageLayout>
  );
};
export default HomePage;

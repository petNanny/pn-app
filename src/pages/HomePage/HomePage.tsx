//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../../components/SearchBar/SearchBar";
import GoogleMap from "../../components/GoogleMap";
import PageLayout from "../../components/Layout/PageLayout";
import PetSitterCardList from "../../components/userCard/PetSitterCardList/PetSitterCardList";
import { Layout } from "../../components/Layout/styledPageLayout";
import { LaptopAndDesktop, MobileAndTablet } from "./styledHomePage";
import { useStoreSelector } from "../../store/hook";

const HomePage = () => {
  const showMapOrCard = useStoreSelector((state) => state.boardingPage.showMapOrCard);
  return (
    <PageLayout>
      <SearchBar />
      <LaptopAndDesktop>
        <Layout>
          <PetSitterCardList />
          <GoogleMap />
        </Layout>
      </LaptopAndDesktop>
      <MobileAndTablet>
        <Layout>{showMapOrCard ? <GoogleMap /> : <PetSitterCardList />}</Layout>
      </MobileAndTablet>
    </PageLayout>
  );
};
export default HomePage;

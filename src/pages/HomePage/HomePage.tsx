//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../../components/SearchBar/SearchBar";
import GoogleMap from "../../components/GoogleMap";
import PageLayout from "../../components/Layout/PageLayout";
import PetSitterCardList from "../../components/userCard/PetSitterCardList/PetSitterCardList";
import { Layout } from "../../components/Layout/styledPageLayout";
import { LaptopAndDesktop, MobileAndTablet } from "./styledHomePage";
import { useStoreSelector } from "../../store/hook";
import { useState } from "react";

const HomePage = () => {
  const showMapOrCard = useStoreSelector((state) => state.boardingPage.showMapOrCard);
  const [filterResults, setFilterResults] = useState<[]>([]);
  const [isResultsLoading, setIsResultsLoading] = useState<boolean>(false);
  const [centerPoint, setCenterPoint] = useState<number[]>([]);

  return (
    <PageLayout>
      <SearchBar
        getResults={setFilterResults}
        getIsResultsLoading={setIsResultsLoading}
        getCenterPoint={setCenterPoint}
      />
      <LaptopAndDesktop>
        <Layout>
          <PetSitterCardList results={filterResults} isResultsLoading={isResultsLoading} />
          <GoogleMap results={filterResults} centerPoint={centerPoint} />
        </Layout>
      </LaptopAndDesktop>
      <MobileAndTablet>
        <Layout>
          {showMapOrCard ? (
            <GoogleMap results={filterResults} centerPoint={centerPoint} />
          ) : (
            <PetSitterCardList results={filterResults} isResultsLoading={isResultsLoading} />
          )}
        </Layout>
      </MobileAndTablet>
    </PageLayout>
  );
};
export default HomePage;

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
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <PageLayout>
      <SearchBar
        getResults={setFilterResults}
        getIsResultsLoading={setIsResultsLoading}
        getCenterPoint={setCenterPoint}
        getTotalPages={setTotalPages}
        currentPage={currentPage}
      />
      <LaptopAndDesktop>
        <Layout>
          <PetSitterCardList
            results={filterResults}
            isResultsLoading={isResultsLoading}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <GoogleMap results={filterResults} centerPoint={centerPoint} />
        </Layout>
      </LaptopAndDesktop>
      <MobileAndTablet>
        <Layout>
          {showMapOrCard ? (
            <GoogleMap results={filterResults} centerPoint={centerPoint} />
          ) : (
            <PetSitterCardList
              results={filterResults}
              isResultsLoading={isResultsLoading}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
        </Layout>
      </MobileAndTablet>
    </PageLayout>
  );
};
export default HomePage;

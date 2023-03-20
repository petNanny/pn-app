//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar/SearchBar";
import GoogleMap from "../components/GoogleMap";
import PageLayout from "../components/Layout/PageLayout";
import PetSitterCardList from "../components/userCard/PetSitterCardList/PetSitterCardList";
import { useState } from "react";

const HomePage = () => {
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
      <PetSitterCardList results={filterResults} isResultsLoading={isResultsLoading} />
      <GoogleMap results={filterResults} centerPoint={centerPoint} />
    </PageLayout>
  );
};

export default HomePage;

//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar/SearchBar";
import GoogleMap from "../components/GoogleMap";
import PageLayout from "../components/Layout/PageLayout";
import PetSitterCardList from "../components/userCard/PetSitterCardList/PetSitterCardList";
import { useState } from "react";

const HomePage = () => {
  const [filterResults, setFilterResults] = useState<[]>([]);
  const [isResultsLoading, setIsResultsLoading] = useState<boolean>(false);

  return (
    <PageLayout>
      <SearchBar getResults={setFilterResults} getIsResultsLoading={setIsResultsLoading} />
      <PetSitterCardList results={filterResults} isResultsLoading={isResultsLoading} />
      <GoogleMap />
    </PageLayout>
  );
};

export default HomePage;

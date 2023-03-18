//TODO:  navbar, search bar, pet sitters list and map
import SearchBar from "../components/SearchBar/SearchBar";
import GoogleMap from "../components/GoogleMap";
import PageLayout from "../components/Layout/PageLayout";
import PetSitterCardList from "../components/userCard/PetSitterCardList/PetSitterCardList";
import { useState } from "react";

const HomePage = () => {
  const [filterResults, setFilterResults] = useState<[]>([]);
  const [centerLat, setCenterLat] = useState<number>(-33.87015275384432);
  const [centerLng, setCenterLng] = useState<number>(151.21098410907578);
  const [isResultsLoading, setIsResultsLoading] = useState<boolean>(false);
  console.log("out results", filterResults);
  console.log("home", isResultsLoading);

  return (
    <PageLayout>
      <SearchBar
        getResults={setFilterResults}
        getCenterLat={setCenterLat}
        getCenterLng={setCenterLng}
        getIsResultsLoading={setIsResultsLoading}
      />
      <PetSitterCardList
        results={filterResults}
        centerLat={centerLat}
        centerLng={centerLng}
        isResultsLoading={isResultsLoading}
      />
      <GoogleMap />
    </PageLayout>
  );
};

export default HomePage;

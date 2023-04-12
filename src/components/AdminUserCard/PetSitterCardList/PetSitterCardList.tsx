import PetSitterCard from "../PetSitterCard/PetSitterCard";
import AdminPagination from "../AdminPagination/AdminPagination";
import { PetSitterContainer } from "./styledPetSitterCardList";
import { useState } from "react";
import { useGetAllPetSittersQuery } from "../../../redux/petSitterApi";
import { Navigate } from "react-router-dom";

const PetSitterCardList = () => {
  const [page, setPage] = useState("1");

  const { data: queryData, isLoading: isPetSitterLoading } = useGetAllPetSittersQuery(page);
  let petSitterData;
  let numberOfCurrentPage;
  let numberOfPage;
  console.log(queryData);
  if (isPetSitterLoading) return <div>Loading...</div>;
  if (queryData) {
    ({
      data: petSitterData,
      currentPage: numberOfCurrentPage,
      numberOfPage: numberOfPage,
    } = queryData);
  } else {
    return <Navigate to="/error" replace />;
  }
  console.log(petSitterData);
  console.log(numberOfCurrentPage);
  // console.log(numberOfPage);

  return (
    <PetSitterContainer>
      <PetSitterCard petSitterData={petSitterData} />
      <AdminPagination
        numberOfCurrentPage={numberOfCurrentPage}
        numberOfPage={numberOfPage}
        setPage={setPage}
      />
    </PetSitterContainer>
  );
};

export default PetSitterCardList;

import PetOwnerCard from "../PetOwnerCard/PetOwnerCard";
import { PetOwnerContainer } from "./styledPetOwnerList";
import AdminPagination from "../AdminPagination/AdminPagination";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useGetAllPetOwnersQuery } from "../../../redux/petOwnerApi";

const PetOwnerCardList = () => {
  const [page, setPage] = useState("1");

  const { data: queryData, isLoading: isPetOwnerLoading } = useGetAllPetOwnersQuery(page);
  let petOwnerData;
  let numberOfCurrentPage;
  let numberOfPage;
  console.log(queryData);
  if (isPetOwnerLoading) return <div>Loading...</div>;
  if (queryData) {
    ({
      data: petOwnerData,
      currentPage: numberOfCurrentPage,
      numberOfPage: numberOfPage,
    } = queryData);
  } else {
    return <Navigate to="/error" replace />;
  }
  console.log(petOwnerData);
  console.log(numberOfCurrentPage);
  console.log(numberOfPage);
  return (
    <PetOwnerContainer>
      <PetOwnerCard petOwnerData={petOwnerData} />
      <AdminPagination
        numberOfCurrentPage={numberOfCurrentPage}
        numberOfPage={numberOfPage}
        setPage={setPage}
      />
    </PetOwnerContainer>
  );
};

export default PetOwnerCardList;

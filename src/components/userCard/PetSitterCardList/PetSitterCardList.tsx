import PetSitterCard from "../PetSitterCard/PetSitterCard";
import { UserCardContainer, PaginationContainer, PaginationBtn } from "./styledPetSitterCardList";
import { CircularProgress, Box } from "@chakra-ui/react";
import PreviousBtn from "../../../assets/Icons/previous.svg";
import NextBtn from "../../../assets/Icons/next.svg";
import { useEffect, useState } from "react";

export interface PetSitter {
  id: string;
  avatar: string;
  name: string;
  suburb: string;
  introduction: string;
  price: number;
  distance: string;
  rating: number;
}
interface CardListProps {
  results: [];
  isResultsLoading: boolean | undefined;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const PetSitterCardList = ({
  results,
  isResultsLoading,
  totalPages,
  setCurrentPage,
  currentPage,
}: CardListProps) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, [totalPages]);

  if (!results || results.length === 0) return <div>no result</div>;
  if (isResultsLoading) return <CircularProgress isIndeterminate color="green.300" />;

  const handlePrevious = () => {
    setCurrentPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };

  const handleNext = () => {
    setCurrentPage((p) => {
      if (p === totalPages) return p;
      return p + 1;
    });
  };

  const handlePageNumber = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <UserCardContainer>
        {results.map((petSitter: any) => (
          <PetSitterCard
            key={petSitter._id}
            id={petSitter._id}
            name={petSitter.petOwner.userName}
            avatar={petSitter.petOwner.avatar}
            suburb={petSitter.address.city}
            price={petSitter.service[0].Rate}
            introduction={petSitter.introduction}
            distance={petSitter.distance}
            rating={petSitter.rating || 5}
          />
        ))}
        <PaginationContainer>
          {currentPage === 1 ? null : (
            <PaginationBtn onClick={handlePrevious}>
              <img alt="previous page" src={PreviousBtn} />
            </PaginationBtn>
          )}
          current page: {currentPage}
          total pages: {totalPages}
          {currentPage === totalPages ? null : (
            <PaginationBtn onClick={handleNext}>
              <img alt="next page" src={NextBtn} />
            </PaginationBtn>
          )}
          <ul>
            {pageNumbers.map((pageNumber) => (
              <li key={pageNumber}>
                <button onClick={() => handlePageNumber(pageNumber)}>{pageNumber}</button>
              </li>
            ))}
          </ul>
        </PaginationContainer>
      </UserCardContainer>
    </>
  );
};

export default PetSitterCardList;

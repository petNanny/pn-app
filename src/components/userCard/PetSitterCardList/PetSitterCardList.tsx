import PetSitterCard from "../PetSitterCard/PetSitterCard";
import { UserCardContainer } from "./styledPetSitterCardList";
import { CircularProgress } from "@chakra-ui/react";
import PetSitterPagination from "../../PetSitterPagination/PetSitterPagination";
import { Text, Box } from "@chakra-ui/react";

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
  pageSize: number;
}

const PetSitterCardList = ({
  results,
  isResultsLoading,
  totalPages,
  setCurrentPage,
  currentPage,
  pageSize,
}: CardListProps) => {
  if (!results || results.length === 0) {
    return (
      <UserCardContainer>
        <Box padding="1rem">
          <Text>We could not find any sitters that matched your criteria.</Text>
          <Text>Please change your filters.</Text>
        </Box>
      </UserCardContainer>
    );
  }
  if (isResultsLoading) return <CircularProgress isIndeterminate color="green.300" />;

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
        <PetSitterPagination
          totalPages={totalPages}
          pageSize={pageSize}
          siblingCount={1}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </UserCardContainer>
    </>
  );
};

export default PetSitterCardList;

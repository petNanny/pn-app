import PetSitterCard from "../PetSitterCard/PetSitterCard";
import { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";

export interface PetSitter {
  id: number;
  avatar: string;
  name: string;
  suburb: string;
  introduction: string;
  price: number;
  distance: string;
  // rating: number;
}
interface CardListProps {
  results: [];
  isResultsLoading: boolean | undefined;
}

const PetSitterCardList = ({ results, isResultsLoading }: CardListProps) => {
  if (!results || results.length === 0) return <div>no result</div>;

  if (isResultsLoading) return <CircularProgress isIndeterminate color="green.300" />;

  return (
    <div>
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
          // rating={petSitter.rating}
        />
      ))}
    </div>
  );
};

export default PetSitterCardList;

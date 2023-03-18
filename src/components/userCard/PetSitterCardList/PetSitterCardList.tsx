import PetSitterCard from "../PetSitterCard/PetSitterCard";
import { useState, useEffect } from "react";
import { getDistance } from "geolib";

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
  centerLat: number;
  centerLng: number;
  isResultsLoading: boolean | undefined;
}

const PetSitterCardList = ({ results, centerLat, centerLng, isResultsLoading }: CardListProps) => {
  const [rawResults, setRawResults] = useState<[]>();

  useEffect(() => {
    setRawResults(results);
  }, [results]);

  if (!rawResults || rawResults.length === 0) return <div>no result</div>;

  const distances = rawResults.map((result: any) => {
    return getDistance(
      { latitude: centerLat, longitude: centerLng },
      { latitude: result.geoCode.coordinates[1], longitude: result.geoCode.coordinates[0] }
    );
  });

  const displayedDistances = distances.map((distance: number) => {
    if (distance <= 1000) {
      return "< 1 km";
    } else if (distance <= 5000) {
      return "< 5 km";
    } else if (distance <= 10000) {
      return "< 10 km";
    } else if (distance <= 20000) {
      return "< 20 km";
    } else {
      return "< 50 km";
    }
  });

  const displayedResults = rawResults.map((result: [], index: number) => {
    return {
      ...result,
      distance: displayedDistances[index],
    };
  });

  console.log(displayedResults);

  if (isResultsLoading) return <div>loading</div>;

  return (
    <div>
      {displayedResults.map((petSitter: any) => (
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

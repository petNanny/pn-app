import PetSitterCard from "../PetSitterCard/PetSitterCard";
import { UserCardContainer } from "./styledPetSitterCardList";
import { useGetAllPetSittersQuery } from "../../../redux/petSitterApi";

export interface PetSitter {
  id: string;
  avatar: string;
  userName: string;
  city: string;
  introduction: string;
  price: number;
  distance: number;
  rating: number;
}

const PetSitterCardList = () => {
  //'1' means passing page 1 to the url
  const { data } = useGetAllPetSittersQuery(1);
  const petSittersInfo = data?.data;

  return (
    <UserCardContainer>
      {petSittersInfo?.map((onePetSitter: any) => (
        <PetSitterCard
          key={onePetSitter._id}
          id={onePetSitter._id}
          userName={onePetSitter?.petOwner?.userName}
          avatar={onePetSitter?.petOwner?.avatar}
          city={onePetSitter?.address?.city}
          price={onePetSitter.price || 65}
          introduction={onePetSitter?.introduction}
          distance={onePetSitter.distance || 0}
          rating={onePetSitter.rating || 5}
        />
      ))}
    </UserCardContainer>
  );
};

export default PetSitterCardList;

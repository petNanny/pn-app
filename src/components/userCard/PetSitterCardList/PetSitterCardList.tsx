import "./PetSitterCardList.css";
import PetSitterCard from "../PetSitterCard/PetSitterCard";

export interface PetSitter {
  id: number;
  avatar: string;
  name: string;
  suburb: string;
  introduction: string;
  price: number;
  distance: number;
  rating: number;
}

export const petSitter: PetSitter[] = [
  {
    id: 1,
    avatar: "https://robohash.org/laboriosametdolor.png?size=50x50&set=set1",
    name: "Antuk",
    suburb: "Banjar Peguyangan",
    introduction: "K6oXNCNgAQPgXOfBaJN6aoXCcPh5wh9QIwkEc8Jo2axbDxHyeW0y5p3puRjt",
    price: 615,
    distance: 29,
    rating: 5,
  },
  {
    id: 1,
    avatar: "https://robohash.org/laboriosametdolor.png?size=50x50&set=set1",
    name: "Antuk",
    suburb: "Banjar Peguyangan",
    introduction: "K6oXNCNgAQPgXOfBaJN6aoXCcPh5wh9QIwkEc8Jo2axbDxHyeW0y5p3puRjt",
    price: 615,
    distance: 29,
    rating: 5,
  },
];

const PetSitterCardList = () => {
  return (
    <div>
      <div>
        {petSitter.map((petSitter) => (
          <PetSitterCard
            key={petSitter.id}
            id={petSitter.id}
            name={petSitter.name}
            avatar={petSitter.avatar}
            suburb={petSitter.suburb}
            price={petSitter.price}
            introduction={petSitter.introduction}
            distance={petSitter.distance}
            rating={petSitter.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default PetSitterCardList;

import { PetSitterLi } from "./styledPetSitterCard";

interface PetSitterCardType {
  petSitterData: any;
}

const PetSitterCard = (props: PetSitterCardType) => {
  const petSitterData = props.petSitterData;
  return (
    <div>
      <ul>
        {petSitterData.map((post: any) => (
          <PetSitterLi key={post._id}>PetSitterID: {post._id}</PetSitterLi>
        ))}
      </ul>
    </div>
  );
};

export default PetSitterCard;

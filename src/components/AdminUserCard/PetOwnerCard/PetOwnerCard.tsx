import { PetOwnerLi } from "./styledPetOwnerCard";

interface PetOwnerCardType {
  petOwnerData: any;
}

const PetOwnerCard = (props: PetOwnerCardType) => {
  const petOwnerData = props.petOwnerData;
  return (
    <div>
      <ul>
        {petOwnerData.map((post: any) => (
          <PetOwnerLi key={post._id}>PetSitterID: {post._id}</PetOwnerLi>
        ))}
      </ul>
    </div>
  );
};

export default PetOwnerCard;

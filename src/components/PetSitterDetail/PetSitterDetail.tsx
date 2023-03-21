import { Stack, Button, Text, Image } from "@chakra-ui/react";
import { useGetOnePetSitterQuery } from "../../redux/petSitterApi";
import { useParams } from "react-router-dom";

const PetSitterDetail = () => {
  const { id } = useParams();
  const { data } = useGetOnePetSitterQuery(id);

  return (
    <Stack>
      <div>PetSitterDetail</div>
      <Text>petSitterId : {data?._id}</Text>
      <Text>petSitter userName : {data?.petOwner?.userName}</Text>
      <Text>petSitter language : {data?.languages}</Text>
      <Image boxSize="150px" src={data?.petOwner?.avatar} />
      <Button>Chat with this petSitter</Button>
      <Button>Order service from this petSitter</Button>
    </Stack>
  );
};

export default PetSitterDetail;

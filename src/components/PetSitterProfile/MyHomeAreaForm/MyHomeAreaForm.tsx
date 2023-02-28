import { Flex, Button } from "@chakra-ui/react";
import MyHome from "./MyHome/MyHome";
import WalkingArea from "./WalkingArea/WalkingArea";
const MyHomeAreaForm = () => {
  return (
    <Flex flexDirection="column" width="100%" gap="8">
      <MyHome />
      <WalkingArea />
      <Button bg="#00C38A" color="#ffffff" fontWeight="md" padding="2.5" height="50px">
        Save
      </Button>
    </Flex>
  );
};

export default MyHomeAreaForm;

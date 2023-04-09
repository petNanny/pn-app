import { Box, Image, Button, Text, useToast } from "@chakra-ui/react";
import heroBackgroudImage from "../../../assets/becomePetSitter/dog-sitting-pet-sitting.webp";
import googlePlayButton from "../../../assets/becomePetSitter/playstore.svg";
import appleStoreButton from "../../../assets/becomePetSitter/appstore.svg";
import reviewAD from "../../../assets/becomePetSitter/trustpilot_v2.svg";
import { useCreateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const petOwner = useSelector((state: RootState) => state.petOwner);
  const [createOnePetSitter] = useCreateOnePetSitterMutation();

  const handleClick = async () => {
    if (!petOwner._id) {
      navigate("/login");
    } else {
      // create pet sitter id
      try {
        await createOnePetSitter(petOwner);
        toast({
          title: "Create Pet Sitter success",
          description: "we created account for you",
          status: "success",
          duration: 3000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });

        navigate(`/userProfile/about-me/${petOwner._id}`);
      } catch (err) {
        toast({
          title: "Create Pet Sitter failed",
          description: "we can't create sitter for you",
          status: "error",
          duration: 3000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    }
  };

  return (
    <Box
      backgroundImage={heroBackgroudImage}
      maxWidth="100%"
      height="55vh"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box margin="1rem">
        <Text color="#ffffff" fontSize="3rem" marginBottom="1rem" fontWeight="semibold">
          Pet sitter jobs with Pet Nanny
        </Text>
      </Box>

      <Button
        bg="#00C38A"
        color="#ffffff"
        fontWeight="md"
        padding="2.5"
        width="300px"
        height="70px"
        marginBottom="2rem"
        onClick={() => handleClick()}
      >
        Apply to become a pet sitter
      </Button>
      <Box marginBottom="2rem">
        <Image src={reviewAD} width="380px" height="30px" />
      </Box>

      <Box display="flex" gap="15px">
        <Image src={googlePlayButton} width="128px" height="40px" cursor="pointer" />
        <Image src={appleStoreButton} width="128px" height="40px" cursor="pointer" />
      </Box>
    </Box>
  );
};

export default Hero;

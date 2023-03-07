import { Button, Box, Image } from "@chakra-ui/react";
import { useGetPetSitterImagesQuery } from "../../../../redux/api/attachmentApi";
import { CURRENT_LOGIN_USER_ID } from "../../../../utils/constants";
import { useEffect } from "react";

const ProfileImages = () => {
  const { data, isLoading: isProfileImageLoading } =
    useGetPetSitterImagesQuery(CURRENT_LOGIN_USER_ID);

  if (isProfileImageLoading) {
    return <Box>is loading</Box>;
  }

  if (!data.images) {
    return <Box>Please upload your profile image</Box>;
  }

  return (
    <Box marginTop="2rem" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
      {data.images.map((uploadedImg: { _id: string; url: string }) => (
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          border="1px solid rgb(206, 206, 206)"
          borderRadius="4px"
          backgroundColor="white"
          key={uploadedImg._id}
        >
          <Box
            padding="0.5rem"
            borderBottom="1px solid rgb(206, 206, 206)"
            borderRadius="4px 4px 0 0"
            backgroundColor="rgb(249, 249, 249)"
            width="100%"
            cursor="-web-grab"
          >
            move
          </Box>
          <Box padding="1rem">
            <Image
              src={uploadedImg.url}
              width="100%"
              height="300px"
              borderRadius="4px"
              objectFit="contain"
            />
            <Button marginLeft="auto" marginRight="auto" marginTop="1rem" width="100%">
              Remove
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProfileImages;

import { Button, Box, Image, useToast } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import {
  useDeleteMutation,
  useUserGetOwnImagesQuery,
  useUpdateImagesOrderMutation,
} from "../../../../redux/imageApi";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { ProfileGalleryImageValues } from "../../../../interfaces/profileGalleryImage";

const ProfileImages: React.FC = () => {
  const [remove, { isSuccess: isRemoveSuccess, isError: isRemoveError }] = useDeleteMutation();
  const [getImages, setGetImages] = useState<ProfileGalleryImageValues[]>([]);
  const toast = useToast();

  const petOwner = useSelector((state: any) => state.petOwner);
  const {
    data: imagesData,
    isLoading: isProfileImageLoading,
    refetch: refetchImages,
  } = useUserGetOwnImagesQuery(petOwner._id);

  const [updateOrder, { isSuccess: isUpdateOrderSuccess }] = useUpdateImagesOrderMutation(
    petOwner._id
  );

  useEffect(() => {
    if (imagesData !== undefined) {
      setGetImages(imagesData);
    } else {
      setGetImages([]);
    }
  }, [imagesData, setGetImages]);

  const handleRemoveImg = async (e: any, fileName: string) => {
    e.preventDefault();
    const bodyData = {
      fileName: fileName,
    };
    await remove({ petOwnerId: petOwner._id, body: bodyData });
    refetchImages();
  };

  const removeSuccessId = "removeSuccess";
  const removeFailId = "removeFail";

  // isRemoveSuccess &&
  //   !toast.isActive(removeSuccessId) &&
  //   toast({
  //     id: removeSuccessId,
  //     title: "Image removed successfully",
  //     status: "success",
  //     duration: 3000,
  //     isClosable: true,
  //     containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
  //   });
  // isRemoveError &&
  //   !toast.isActive(removeFailId) &&
  //   toast({
  //     id: removeFailId,
  //     title: "Image remove failed",
  //     status: "error",
  //     duration: 3000,
  //     isClosable: true,
  //     containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
  //   });

  // const [enabled, setEnabled] = useState(false);
  // useEffect(() => {
  //   const animation = requestAnimationFrame(() => setEnabled(true));
  //   return () => {
  //     cancelAnimationFrame(animation);
  //     setEnabled(false);
  //   };
  // }, []);
  // if (!enabled) {
  //   return null;
  // }

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    const newGetImages = [...getImages];
    const [reorderedImage] = newGetImages.splice(result.source.index, 1);
    newGetImages.splice(result.destination.index, 0, reorderedImage);
    setGetImages(newGetImages);
    await updateOrder({ petOwnerId: petOwner._id, body: newGetImages });
  };

  return (
    <>
      {/* <Box marginTop="2rem" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
        {getImages.map(
          (uploadedImg: { _id: string; url: string; fileName: string; orderNumber: number }) => (
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
                  alt={uploadedImg.fileName}
                  width="100%"
                  height="300px"
                  borderRadius="4px"
                  objectFit="contain"
                />
                <Button
                  marginLeft="auto"
                  marginRight="auto"
                  marginTop="1rem"
                  width="100%"
                  onClick={(e) => handleRemoveImg(e, uploadedImg.fileName)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          )
        )}
      </Box> */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="getImages">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {getImages.map(
                (uploadedImg: {
                  _id: string;
                  url: string;
                  fileName: string;
                  orderNumber: number;
                }) => (
                  <Draggable
                    key={uploadedImg._id}
                    draggableId={uploadedImg._id}
                    index={uploadedImg.orderNumber}
                  >
                    {(provided) => (
                      <Box
                        display="flex"
                        flexWrap="wrap"
                        alignItems="center"
                        justifyContent="center"
                        border="1px solid rgb(206, 206, 206)"
                        borderRadius="4px"
                        backgroundColor="white"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
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
                            alt={uploadedImg.fileName}
                            width="100%"
                            height="300px"
                            borderRadius="4px"
                            objectFit="contain"
                          />
                          <Button
                            marginLeft="auto"
                            marginRight="auto"
                            marginTop="1rem"
                            width="100%"
                            onClick={(e) => handleRemoveImg(e, uploadedImg.fileName)}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    )}
                  </Draggable>
                )
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ProfileImages;

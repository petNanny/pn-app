import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  useDeleteMutation,
  useUserGetOwnImagesQuery,
  useUpdateImagesOrderMutation,
} from "../../../../redux/imageApi";
import { useSelector } from "react-redux";
import { ProfileGalleryImageValues } from "../../../../interfaces/profileGalleryImage";
import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from "array-move";
import {
  ImageCardsContainer,
  ImageCard,
  MoveBox,
  ImageContentContainer,
  ImageBox,
  RemoveBtn,
} from "./styledProfileImages";

const ProfileImages: React.FC = () => {
  const [remove, { isSuccess: isRemoveSuccess, isError: isRemoveError }] = useDeleteMutation();
  const [getImages, setGetImages] = useState<ProfileGalleryImageValues[]>([]);
  const toast = useToast();
  const petOwner = useSelector((state: any) => state.petOwner);
  const { data: imagesData, refetch: refetchImages } = useUserGetOwnImagesQuery(petOwner._id);
  const [updateOrder, { isSuccess: isUpdateOrderSuccess }] = useUpdateImagesOrderMutation(
    petOwner._id
  );
  const removeSuccessId = "removeSuccess";
  const removeFailId = "removeFail";
  const updateOrderSuccessId = "updateOrderSuccess";

  useEffect(() => {
    if (imagesData) {
      setGetImages(imagesData);
    } else {
      setGetImages([]);
    }
  }, [imagesData, setGetImages]);

  useEffect(() => {
    if (isRemoveSuccess) {
      if (!toast.isActive(removeSuccessId)) {
        toast({
          id: removeSuccessId,
          title: "Image removed successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    }
    if (isRemoveError) {
      if (!toast.isActive(removeFailId)) {
        toast({
          id: removeFailId,
          title: "Image remove failed",
          status: "error",
          duration: 3000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    }
  }, [isRemoveSuccess, isRemoveError]);

  useEffect(() => {
    if (isUpdateOrderSuccess) {
      if (!toast.isActive(updateOrderSuccessId)) {
        toast({
          id: updateOrderSuccessId,
          title: "Images reorder successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    }
  }, [isUpdateOrderSuccess]);

  const handleRemoveImg = async (e: any, fileName: string) => {
    e.preventDefault();
    const bodyData = {
      fileName: fileName,
    };
    await remove({ petOwnerId: petOwner._id, body: bodyData });
    refetchImages();
  };

  const onSortEnd = async (oldIndex: number, newIndex: number) => {
    const newGetImages = arrayMoveImmutable(getImages, oldIndex, newIndex);
    setGetImages(newGetImages);
    await updateOrder({ petOwnerId: petOwner._id, body: newGetImages });
    refetchImages();
  };

  return (
    <ImageCardsContainer>
      <SortableList
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="dragged"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
      >
        {getImages.map(
          (uploadedImg: { _id: string; url: string; fileName: string; orderNumber: number }) => (
            <SortableItem key={uploadedImg._id}>
              <ImageCard>
                <MoveBox>move</MoveBox>
                <ImageContentContainer>
                  <ImageBox src={uploadedImg.url} alt={uploadedImg.fileName} />
                  <RemoveBtn onClick={(e: any) => handleRemoveImg(e, uploadedImg.fileName)}>
                    Remove
                  </RemoveBtn>
                </ImageContentContainer>
              </ImageCard>
            </SortableItem>
          )
        )}
      </SortableList>
    </ImageCardsContainer>
  );
};

export default ProfileImages;

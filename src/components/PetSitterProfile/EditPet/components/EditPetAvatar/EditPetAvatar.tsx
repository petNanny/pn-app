import { Input, Box, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import { StyledFormLabel } from "./styledEditPetAvatar";
import Popup from "../Popup/Popup";

interface EditPetAvatarProps {
  uploadImg: File | null;
  setUploadImg: React.Dispatch<React.SetStateAction<File | null>>;
  getAvatar: any;
}

const EditPetAvatar = ({ setUploadImg, getAvatar }: EditPetAvatarProps) => {
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<string>(getAvatar);
  const [open, setOpen] = useState(false);

  const onInputChange = (e: any) => {
    if (e.target.files) {
      setUploadImg(e.target.files[0]);
    }
    const selectedImg = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCroppedImage(reader.result as any);
    };
    reader.readAsDataURL(selectedImg);
    setOpen(true);
  };

  const handleInputClick = (e: any) => {
    e.currentTarget.value = null;
  };

  return (
    <Box display="flex" alignItems="center">
      <Avatar size="xl" marginRight="1rem" src={image} />
      <StyledFormLabel>Upload photo</StyledFormLabel>
      <Input
        type="file"
        display="none"
        accept="image/*"
        onChange={onInputChange}
        onClick={handleInputClick}
      />
      <Popup
        open={open}
        setOpen={setOpen}
        croppedImage={croppedImage}
        setNewImgBlob={setUploadImg}
        setImage={setImage}
      />
    </Box>
  );
};

export default EditPetAvatar;

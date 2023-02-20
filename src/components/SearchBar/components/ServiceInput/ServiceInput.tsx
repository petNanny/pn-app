import { useState } from "react";
import { Box, Menu, MenuOptionGroup, Text, Img } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import homeDogBoarding from "../../../../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../../../../assets/Icons/doggyDayCare.svg";
import dogWalking from "../../../../assets/Icons/dogWalking.svg";
import homeVisits from "../../../../assets/Icons/homeVisits.svg";
import houseSitting from "../../../../assets/Icons/houseSitting.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormik } from "formik";
import {
  SetServiceTextBox,
  StyledImage,
  StyledSetServiceText,
  StyledMenuButton,
  BoxInMenuButton,
  MenuBtnIcon,
  StyledMenuList,
  TitleBox,
  StyledMenuDivider,
  StyledMenuItemOption,
  BoxInMenuItemOption,
  MenuItemOptionImageBox,
  MenuItemOptionTitle,
  MenuItemOptionInfo,
} from "./styledServiceInput";

type PetServiceValues = {
  petService: string;
};

type ServiceInputProps = {
  // serviceH1: string;
  changeServiceH1: (value: string) => void;
  changeServiceDetail: (value: string) => void;
};

const ServiceInput: React.FC<ServiceInputProps> = ({
  // serviceH1,
  changeServiceH1,
  changeServiceDetail,
}) => {
  const [serviceText, setServiceText] = useState(<Box>Looking for</Box>);

  const changeServiceText = (img: string, text: string) => {
    setServiceText(
      <SetServiceTextBox>
        <StyledImage src={img} />
        <StyledSetServiceText>{text}</StyledSetServiceText>
      </SetServiceTextBox>
    );
  };

  const formik = useFormik({
    initialValues: {
      petService: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const { handleSubmit: handlePetServiceSubmit } = useForm({
  //   defaultValues: {
  //     petService: "",
  //   },
  // });

  // const submitPetServiceMessage = {
  //   petService: serviceH1,
  // };

  // const onPetServiceSubmit: SubmitHandler<PetServiceValues> = (value) => {
  //   console.log(value);
  // };

  return (
    <>
      <Box>
        <Menu autoSelect={false}>
          <StyledMenuButton>
            <BoxInMenuButton>
              <Box>{serviceText}</Box>
              <MenuBtnIcon as={MdArrowDropDown} />
            </BoxInMenuButton>
          </StyledMenuButton>
          <StyledMenuList>
            <MenuOptionGroup type="radio">
              <TitleBox>
                <Text>At the sitter&apos;s home</Text>
              </TitleBox>
              <StyledMenuDivider />
              <StyledMenuItemOption
                value="Dog boarding"
                onClick={() => {
                  changeServiceText(homeDogBoarding, "Dog boarding");
                  changeServiceH1("Dog Boarding");
                  changeServiceDetail("Overnight stay at the sitter's home.");
                  // handlePetServiceSubmit(onPetServiceSubmit({ petService: "Dog boarding" }))();
                  formik.setFieldValue("petService", "dog");
                }}
              >
                <BoxInMenuItemOption>
                  <MenuItemOptionImageBox>
                    <Img src={homeDogBoarding} />
                  </MenuItemOptionImageBox>
                  <Box>
                    <MenuItemOptionTitle>Dog boarding</MenuItemOptionTitle>
                    <MenuItemOptionInfo>24h stay, at the sitter&apos;s home</MenuItemOptionInfo>
                  </Box>
                </BoxInMenuItemOption>
              </StyledMenuItemOption>
              <StyledMenuItemOption
                value="Doggy day care"
                onClick={() => {
                  changeServiceText(doggyDayCare, "Doggy day care");
                  changeServiceH1("Doggy Day Care");
                  changeServiceDetail("Daytime care for your dog at the sitter's home.");
                  // handlePetServiceSubmit(onPetServiceSubmit({ petService: "Doggy day care" }))();
                }}
              >
                <BoxInMenuItemOption>
                  <MenuItemOptionImageBox>
                    <Img src={doggyDayCare} />
                  </MenuItemOptionImageBox>
                  <Box>
                    <MenuItemOptionTitle>Doggy day care</MenuItemOptionTitle>
                    <MenuItemOptionInfo>Daytime care, at the sitter&apos;s home</MenuItemOptionInfo>
                  </Box>
                </BoxInMenuItemOption>
              </StyledMenuItemOption>
              <TitleBox>
                <Text>At your home </Text>
              </TitleBox>
              <StyledMenuDivider />
              <StyledMenuItemOption
                value="Dog walking"
                onClick={() => {
                  changeServiceText(dogWalking, "Dog walking");
                  changeServiceH1("Dog Walking");
                  changeServiceDetail(
                    "An experienced dog walker will pick up your dog from your home for a 30 mins walk."
                  );
                  // handlePetServiceSubmit(onPetServiceSubmit({ petService: "Dog Walking" }))();
                }}
              >
                <BoxInMenuItemOption>
                  <MenuItemOptionImageBox>
                    <Img src={dogWalking} />
                  </MenuItemOptionImageBox>
                  <Box>
                    <MenuItemOptionTitle>Dog walking</MenuItemOptionTitle>
                    <MenuItemOptionInfo>Min. 30-minute walks</MenuItemOptionInfo>
                  </Box>
                </BoxInMenuItemOption>
              </StyledMenuItemOption>
              <StyledMenuItemOption
                value="Home visits"
                onClick={() => {
                  changeServiceText(homeVisits, "Home visits");
                  changeServiceH1("Home Visits");
                  changeServiceDetail("Drop in visits at your home for your pet.");
                  // handlePetServiceSubmit(onPetServiceSubmit({ petService: "Home visits" }))();
                }}
              >
                <BoxInMenuItemOption>
                  <MenuItemOptionImageBox>
                    <Img src={homeVisits} />
                  </MenuItemOptionImageBox>
                  <Box>
                    <MenuItemOptionTitle>Home visits</MenuItemOptionTitle>
                    <MenuItemOptionInfo>Min. 30-minute visits in your home</MenuItemOptionInfo>
                  </Box>
                </BoxInMenuItemOption>
              </StyledMenuItemOption>
              <StyledMenuItemOption
                value="House sitting"
                onClick={() => {
                  changeServiceText(houseSitting, "House sitting");
                  changeServiceH1("House Sitting");
                  changeServiceDetail(
                    "A sitter stays overnight in your home and cares for your pet."
                  );
                  // handlePetServiceSubmit(onPetServiceSubmit({ petService: "House Sitting" }))();
                }}
              >
                <BoxInMenuItemOption>
                  <MenuItemOptionImageBox>
                    <Img src={houseSitting} />
                  </MenuItemOptionImageBox>
                  <Box>
                    <MenuItemOptionTitle>House sitting</MenuItemOptionTitle>
                    <MenuItemOptionInfo>24h stay, in your home</MenuItemOptionInfo>
                  </Box>
                </BoxInMenuItemOption>
              </StyledMenuItemOption>
            </MenuOptionGroup>
          </StyledMenuList>
        </Menu>
      </Box>
    </>
  );
};

export default ServiceInput;

import { useState } from "react";
import { Box, Menu, MenuOptionGroup, Text, Img } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import homeDogBoarding from "../../../../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../../../../assets/Icons/doggyDayCare.svg";
import dogWalking from "../../../../assets/Icons/dogWalking.svg";
import homeVisits from "../../../../assets/Icons/homeVisits.svg";
import houseSitting from "../../../../assets/Icons/houseSitting.svg";
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

type ServiceInputProps = {
  changeServiceH1: (value: string) => void;
  changeServiceDetail: (value: string) => void;
};

const ServiceType = {
  DogBoarding: "Dog boarding",
  DoggyDayCare: "Doggy day care",
  DogWalking: "Dog walking",
  HomeVisits: "Home visits",
  HouseSitting: "House sitting",
};

const ServiceDetail = {
  DogBoarding: "Overnight stay at the sitter's home.",
  DoggyDayCare: "Daytime care for your dog at the sitter's home.",
  DogWalking: "An experienced dog walker will pick up your dog from your home for a 30 mins walk.",
  HomeVisits: "Drop in visits at your home for your pet.",
  HouseSitting: "A sitter stays overnight in your home and cares for your pet.",
};

const ServiceInfo = {
  DogBoarding: "24h stay, at the sitter's home",
  DoggyDayCare: "Daytime care, at the sitter's home",
  DogWalking: "Min. 30-minute walks",
  HomeVisits: "Min. 30-minute visits in your home",
  HouseSitting: "24h stay, in your home",
};

const ServiceInput: React.FC<ServiceInputProps> = ({ changeServiceH1, changeServiceDetail }) => {
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

  const handleClickDogBoarding = () => {
    changeServiceText(homeDogBoarding, ServiceType.DogWalking);
    changeServiceH1(ServiceType.DogWalking);
    changeServiceDetail(ServiceDetail.DogWalking);
    formik.setFieldValue("petService", ServiceType.DogWalking);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickDoggyDayCare = () => {
    changeServiceText(doggyDayCare, ServiceType.DoggyDayCare);
    changeServiceH1(ServiceType.DoggyDayCare);
    changeServiceDetail(ServiceDetail.DoggyDayCare);
    formik.setFieldValue("petService", ServiceType.DoggyDayCare);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickDogWalking = () => {
    changeServiceText(dogWalking, ServiceType.DogWalking);
    changeServiceH1(ServiceType.DogWalking);
    changeServiceDetail(ServiceDetail.DogWalking);
    formik.setFieldValue("petService", ServiceType.DogWalking);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickHomeVisits = () => {
    changeServiceText(homeVisits, ServiceType.HomeVisits);
    changeServiceH1(ServiceType.HomeVisits);
    changeServiceDetail(ServiceDetail.HomeVisits);
    formik.setFieldValue("petService", ServiceType.HomeVisits);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickHouseSitting = () => {
    changeServiceText(houseSitting, ServiceType.HouseSitting);
    changeServiceH1(ServiceType.HouseSitting);
    changeServiceDetail(ServiceDetail.HouseSitting);
    formik.setFieldValue("petService", ServiceType.HouseSitting);
    setTimeout(formik.handleSubmit, 0);
  };

  const AtSitterHomeServices = [
    {
      id: 1,
      value: ServiceType.DogBoarding,
      handleClick: handleClickDogBoarding,
      img: homeDogBoarding,
      title: ServiceType.DogBoarding,
      info: ServiceInfo.DogBoarding,
    },
    {
      id: 2,
      value: ServiceType.HomeVisits,
      handleClick: handleClickHomeVisits,
      img: homeVisits,
      title: ServiceType.HomeVisits,
      info: ServiceInfo.HomeVisits,
    },
  ];

  const AtOwnerHomeServices = [
    {
      id: 1,
      value: ServiceType.DogWalking,
      handleClick: handleClickDogWalking,
      img: dogWalking,
      title: ServiceType.DogWalking,
      info: ServiceInfo.DogWalking,
    },
    {
      id: 2,
      value: ServiceType.DoggyDayCare,
      handleClick: handleClickDoggyDayCare,
      img: doggyDayCare,
      title: ServiceType.DoggyDayCare,
      info: ServiceInfo.DoggyDayCare,
    },
    {
      id: 3,
      value: ServiceType.HouseSitting,
      handleClick: handleClickHouseSitting,
      img: houseSitting,
      title: ServiceType.HouseSitting,
      info: ServiceInfo.HouseSitting,
    },
  ];

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
              {AtSitterHomeServices.map((item) => {
                return (
                  <StyledMenuItemOption key={item.id} value={item.value} onClick={item.handleClick}>
                    <BoxInMenuItemOption>
                      <MenuItemOptionImageBox>
                        <Img src={item.img} />
                      </MenuItemOptionImageBox>
                      <Box>
                        <MenuItemOptionTitle>{item.title}</MenuItemOptionTitle>
                        <MenuItemOptionInfo>{item.info}</MenuItemOptionInfo>
                      </Box>
                    </BoxInMenuItemOption>
                  </StyledMenuItemOption>
                );
              })}
              <TitleBox>
                <Text>At your home </Text>
              </TitleBox>
              <StyledMenuDivider />
              {AtOwnerHomeServices.map((item) => {
                return (
                  <StyledMenuItemOption key={item.id} value={item.value} onClick={item.handleClick}>
                    <BoxInMenuItemOption>
                      <MenuItemOptionImageBox>
                        <Img src={item.img} />
                      </MenuItemOptionImageBox>
                      <Box>
                        <MenuItemOptionTitle>{item.title}</MenuItemOptionTitle>
                        <MenuItemOptionInfo>{item.info}</MenuItemOptionInfo>
                      </Box>
                    </BoxInMenuItemOption>
                  </StyledMenuItemOption>
                );
              })}
            </MenuOptionGroup>
          </StyledMenuList>
        </Menu>
      </Box>
    </>
  );
};

export default ServiceInput;

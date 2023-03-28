import { useState } from "react";
import {
  Box,
  Menu,
  MenuOptionGroup,
  Text,
  Img,
  FormControl,
  useMediaQuery,
  Portal,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import homeDogBoarding from "../../../../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../../../../assets/Icons/doggyDayCare.svg";
import dogWalking from "../../../../assets/Icons/dogWalking.svg";
import homeVisits from "../../../../assets/Icons/homeVisits.svg";
import houseSitting from "../../../../assets/Icons/houseSitting.svg";
import {
  ServiceInputContainer,
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
  StyledFormLabel,
} from "./styledServiceInput";
import { FormikProps } from "formik";
import { SearchFormValues } from "../../../../interfaces/searchForm";

interface ServiceInputProps {
  changeServiceHeading: (value: string) => void;
  changeServiceDetail: (value: string) => void;
  formik: FormikProps<SearchFormValues>;
}

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

const ServiceInput = ({ changeServiceHeading, changeServiceDetail, formik }: ServiceInputProps) => {
  const [img, setImg] = useState(homeDogBoarding);
  const [text, setText] = useState("Dog boarding");

  const handleClickDogBoarding = () => {
    changeServiceHeading(ServiceType.DogBoarding);
    changeServiceDetail(ServiceDetail.DogBoarding);
    formik.setFieldValue("petService", ServiceType.DogBoarding);
    setImg(homeDogBoarding);
    setText(ServiceType.DogBoarding);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickDoggyDayCare = () => {
    changeServiceHeading(ServiceType.DoggyDayCare);
    changeServiceDetail(ServiceDetail.DoggyDayCare);
    formik.setFieldValue("petService", ServiceType.DoggyDayCare);
    setImg(doggyDayCare);
    setText(ServiceType.DoggyDayCare);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickDogWalking = () => {
    setImg(dogWalking);
    setText(ServiceType.DogWalking);
    changeServiceHeading(ServiceType.DogWalking);
    changeServiceDetail(ServiceDetail.DogWalking);
    formik.setFieldValue("petService", ServiceType.DogWalking);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickHomeVisits = () => {
    setImg(homeVisits);
    setText(ServiceType.HomeVisits);
    changeServiceHeading(ServiceType.HomeVisits);
    changeServiceDetail(ServiceDetail.HomeVisits);
    formik.setFieldValue("petService", ServiceType.HomeVisits);
    setTimeout(formik.handleSubmit, 0);
  };

  const handleClickHouseSitting = () => {
    setImg(houseSitting);
    setText(ServiceType.HouseSitting);
    changeServiceHeading(ServiceType.HouseSitting);
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
      testID: "serviceInputDogBoarding",
    },
    {
      id: 2,
      value: ServiceType.HomeVisits,
      handleClick: handleClickHomeVisits,
      img: homeVisits,
      title: ServiceType.HomeVisits,
      info: ServiceInfo.HomeVisits,
      testID: "serviceInputHomeVisits",
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

  const [isTablet] = useMediaQuery("(max-width: 768px)", { ssr: true, fallback: false });
  const [isLaptop] = useMediaQuery("(max-width: 1024px)", { ssr: true, fallback: false });

  return (
    <>
      <ServiceInputContainer>
        <FormControl>
          {isLaptop ? <StyledFormLabel>I&apos;m looking for</StyledFormLabel> : null}
          <Menu matchWidth={isTablet ? true : false} autoSelect={false}>
            <StyledMenuButton>
              <BoxInMenuButton>
                <Box>
                  <SetServiceTextBox>
                    <StyledImage src={img} />
                    <StyledSetServiceText>{text}</StyledSetServiceText>
                  </SetServiceTextBox>
                </Box>
                <MenuBtnIcon as={MdArrowDropDown} />
              </BoxInMenuButton>
            </StyledMenuButton>
            <Portal>
              <StyledMenuList>
                <MenuOptionGroup type="radio">
                  <TitleBox>
                    <Text>At the sitter&apos;s home</Text>
                  </TitleBox>
                  <StyledMenuDivider />
                  {AtSitterHomeServices.map((item) => {
                    return (
                      <StyledMenuItemOption
                        key={item.id}
                        value={item.value}
                        onClick={item.handleClick}
                        data-testid={item.testID}
                      >
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
                      <StyledMenuItemOption
                        key={item.id}
                        value={item.value}
                        onClick={item.handleClick}
                      >
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
            </Portal>
          </Menu>
        </FormControl>
      </ServiceInputContainer>
    </>
  );
};

export default ServiceInput;

import { useState } from "react";
import {
  Box,
  Menu,
  MenuOptionGroup,
  Text,
  Img,
  FormControl,
  useMediaQuery,
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

interface ServiceInputProps {
  changeServiceH1: (value: string) => void;
  changeServiceDetail: (value: string) => void;
  formik: any;
}

const ServiceType = {
  DogBoarding: "Dog Boarding",
  DoggyDayCare: "Doggy Day care",
  DogWalking: "Dog Walking",
  HomeVisits: "Home Visits",
  HouseSitting: "House Sitting",
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

const ServiceInput = (props: ServiceInputProps) => {
  const [serviceText, setServiceText] = useState(
    <SetServiceTextBox>
      <StyledImage src={homeDogBoarding} />
      <StyledSetServiceText>Dog boarding</StyledSetServiceText>
    </SetServiceTextBox>
  );

  const changeServiceText = (img: string, text: string) => {
    setServiceText(
      <SetServiceTextBox>
        <StyledImage src={img} />
        <StyledSetServiceText>{text}</StyledSetServiceText>
      </SetServiceTextBox>
    );
  };

  const handleClickDogBoarding = () => {
    changeServiceText(homeDogBoarding, ServiceType.DogBoarding);
    props.changeServiceH1(ServiceType.DogBoarding);
    props.changeServiceDetail(ServiceDetail.DogBoarding);
    props.formik.setFieldValue("petService", ServiceType.DogBoarding);
    setTimeout(props.formik.handleSubmit, 0);
  };

  const handleClickDoggyDayCare = () => {
    changeServiceText(doggyDayCare, ServiceType.DoggyDayCare);
    props.changeServiceH1(ServiceType.DoggyDayCare);
    props.changeServiceDetail(ServiceDetail.DoggyDayCare);
    props.formik.setFieldValue("petService", ServiceType.DoggyDayCare);
    setTimeout(props.formik.handleSubmit, 0);
  };

  const handleClickDogWalking = () => {
    changeServiceText(dogWalking, ServiceType.DogWalking);
    props.changeServiceH1(ServiceType.DogWalking);
    props.changeServiceDetail(ServiceDetail.DogWalking);
    props.formik.setFieldValue("petService", ServiceType.DogWalking);
    setTimeout(props.formik.handleSubmit, 0);
  };

  const handleClickHomeVisits = () => {
    changeServiceText(homeVisits, ServiceType.HomeVisits);
    props.changeServiceH1(ServiceType.HomeVisits);
    props.changeServiceDetail(ServiceDetail.HomeVisits);
    props.formik.setFieldValue("petService", ServiceType.HomeVisits);
    setTimeout(props.formik.handleSubmit, 0);
  };

  const handleClickHouseSitting = () => {
    changeServiceText(houseSitting, ServiceType.HouseSitting);
    props.changeServiceH1(ServiceType.HouseSitting);
    props.changeServiceDetail(ServiceDetail.HouseSitting);
    props.formik.setFieldValue("petService", ServiceType.HouseSitting);
    setTimeout(props.formik.handleSubmit, 0);
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
          </Menu>
        </FormControl>
      </ServiceInputContainer>
    </>
  );
};

export default ServiceInput;

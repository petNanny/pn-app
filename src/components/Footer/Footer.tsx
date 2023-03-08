import theme from "../../styles/theme";
import visa from "../../assets/footer/visa.svg";
import mastercard from "../../assets/footer/mastercard.svg";
import americanExpress from "../../assets/footer/americanExpress.svg";
import { Box, Text, Link, Image, UnorderedList, Heading, Select } from "@chakra-ui/react";
import {
  StyledFooterBox,
  StyledFooterFlex,
  StyledSelectBox,
  StyledListItem,
  StyledImageBox,
  StyledLink,
  StyledListBox,
  StyledFooterTopFlex,
  StyledFooterBottomFlex,
} from "./StyledFooter";

const primary = theme.colors.background.primary;
const quaternary = theme.colors.background.quaternary;

const learnMore = [
  "How does Pet Nanny work?",
  "Testimonials",
  "The Pet Nanny Guarantee",
  "Payments and refunds",
  "FAQ for Pet Owners",
  "FAQ for Pet Sitters",
  "Dog boarding",
  "Doggy day care",
  "Dog walking",
  "Dog sitting",
  "Cat sitting",
  "Pet sitting",
  "House sitting",
];
const popularCities = [
  "Melbourne",
  "Sydney",
  "Brisbane",
  "Perth",
  "Gold Coast",
  "Adelaide",
  "Sunshine Coast",
  "Tweed Heads",
  "Canberra",
  "Penrith",
];
const images = [
  { src: visa, alt: "visa" },
  { src: mastercard, alt: "mastercard" },
  { src: americanExpress, alt: "americanExpress" },
];
const aboutUs = ["Our Story", "In the press", "Blog", "Help"];
const countries = ["Australia(EN)", "Canada(EN)", "HongKong(CN)", "America(EN)"];
const socialMedia = [
  { url: "https://www.facebook.com/", webName: "Facebook" },
  { url: "https://twitter.com/", webName: "Twitter" },
  { url: "https://www.instagram.com/", webName: "Instagram" },
];
const optionsOfCountries = countries.map((country) => (
  <option key={country} value={country}>
    {country}
  </option>
));
const createListItems = (items: string[]) => {
  return items.map((item) => (
    <StyledListItem key={item}>
      <Link>{item}</Link>
    </StyledListItem>
  ));
};

const ListOfLearnMore = createListItems(learnMore);
const ListOfPopularCities = createListItems(popularCities);
const ListOfAboutUs = createListItems(aboutUs);

const image = images.map((image) => <Image key={image.alt} src={image.src} alt={image.alt} />);
const ListOfSocialMedia = socialMedia.map((item) => (
  <StyledListItem key={item.webName}>
    <Link href={item.url}>{item.webName}</Link>
  </StyledListItem>
));

const Footer = () => {
  return (
    <StyledFooterBox>
      <StyledFooterFlex bg={primary}>
        <StyledFooterTopFlex>
          <StyledListBox>
            <Heading>Learn More</Heading>
            <UnorderedList>{ListOfLearnMore}</UnorderedList>
          </StyledListBox>
          <StyledListBox>
            <Heading>Popular Cities</Heading>
            <UnorderedList>{ListOfPopularCities}</UnorderedList>
            <Box pl="1rem" mt="1rem" fontWeight={550}>
              <Link href="">Top doggy day care cities</Link>
            </Box>
          </StyledListBox>
          <StyledListBox>
            <Heading>About Us</Heading>
            <UnorderedList>{ListOfAboutUs}</UnorderedList>
            <Heading>Payment Methods</Heading>
            <StyledImageBox>{image}</StyledImageBox>
          </StyledListBox>
          <StyledListBox>
            <Heading>Find us on</Heading>
            <UnorderedList>{ListOfSocialMedia}</UnorderedList>
          </StyledListBox>
        </StyledFooterTopFlex>
      </StyledFooterFlex>

      <StyledFooterFlex bg={quaternary}>
        <StyledFooterBottomFlex>
          <Box>
            <Text>
              Copyright © 2023 Pet-Nanny Inc. All Rights Reserved.{" "}
              <StyledLink>Terms and Conditions</StyledLink> and{" "}
              <StyledLink>Privacy & Cookie Policy</StyledLink>.
            </Text>
          </Box>
          <StyledSelectBox>
            <Select iconColor="rgb(116, 116, 116)">{optionsOfCountries}</Select>
          </StyledSelectBox>
        </StyledFooterBottomFlex>
      </StyledFooterFlex>
    </StyledFooterBox>
  );
};

export default Footer;

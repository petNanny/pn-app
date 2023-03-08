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

const Footer = () => {
  return (
    <StyledFooterBox>
      <StyledFooterFlex bg={primary}>
        <StyledFooterTopFlex>
          <StyledListBox>
            <Heading>Learn More</Heading>
            <UnorderedList>
              <StyledListItem>
                <Link>How does Pawshake work?</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Testimonials</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>The Pawshake Guarantee</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Payments and refunds</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>FAQ for Pet Owners</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>FAQ for Pet Sitters</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Dog boarding</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Doggy day care</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Dog walking</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Cat sitting</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Dog sitting</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Pet sitting</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>House sitting</Link>
              </StyledListItem>
            </UnorderedList>
          </StyledListBox>
          <StyledListBox>
            <Heading>Popular Cities</Heading>
            <UnorderedList>
              <StyledListItem>
                <Link>Melbourne</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Sydney</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Brisbane</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Perth</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Adelaide</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Gold Coast</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Sunshine Coast</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Penrith</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Tweed Heads</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Mornington</Link>
              </StyledListItem>
            </UnorderedList>
            <Box pl="1rem" mt="1rem" fontWeight={550}>
              <Link href="">Top doggy day care cities</Link>
            </Box>
          </StyledListBox>
          <StyledListBox>
            <Heading>About Us</Heading>
            <UnorderedList>
              <StyledListItem>
                <Link>Our Story</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>In the press</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Blog</Link>
              </StyledListItem>
              <StyledListItem>
                <Link>Help</Link>
              </StyledListItem>
            </UnorderedList>
            <Heading>Payment Methods</Heading>
            <StyledImageBox>
              <Image src={visa} alt="visa" />

              <Image src={mastercard} alt="mastercard" />

              <Image src={americanExpress} alt="americanExpress" />
            </StyledImageBox>
          </StyledListBox>
          <StyledListBox>
            <Heading>Find us on</Heading>
            <UnorderedList>
              <StyledListItem>
                <Link href="https://www.facebook.com/">Facebook</Link>
              </StyledListItem>
              <StyledListItem>
                <Link href="https://twitter.com/">Twitter</Link>
              </StyledListItem>
              <StyledListItem>
                <Link href="https://www.instagram.com/">Instagram</Link>
              </StyledListItem>
            </UnorderedList>
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
            <Select iconColor="rgb(116, 116, 116)">
              <option value="Australia(EN)">Australia(EN)</option>
              <option value="Canada(EN)">Canada(EN)</option>
              <option value="HongKong(CN)">HongKong(CN)</option>
              <option value="America(EN)">America(EN)</option>
            </Select>
          </StyledSelectBox>
        </StyledFooterBottomFlex>
      </StyledFooterFlex>
    </StyledFooterBox>
  );
};

export default Footer;

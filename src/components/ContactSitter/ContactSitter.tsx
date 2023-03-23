import { useState, useEffect } from "react";
import styled from "styled-components";
import { chakra, Box, Link, ListItem, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import theme from "../../styles/theme";
import visa from "../../assets/footer/visa.svg";
import mastercard from "../../assets/footer/mastercard.svg";
import americanExpress from "../../assets/footer/americanExpress.svg";
import avatar from "../../assets/avatar/avatar1.png";
import filledHeart from "../../assets/favorite/favorite.svg";
import voidHeart from "../../assets/favorite/notFavorite.svg";
import { useNavigate } from "react-router-dom";
import ChooseService from "./components/ChooseService";

const { primary, lightgrey, grey } = theme.colors.background;
const images = [
  { src: visa, alt: "visa" },
  { src: mastercard, alt: "mastercard" },
  { src: americanExpress, alt: "americanExpress" },
];
const image = images.map((image) => <Image key={image.alt} src={image.src} alt={image.alt} />);

const ContactSitter = () => {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleToChat = () => {
    navigate("/chat/1");
  };

  return (
    <StyledBox>
      <Box className="contactInfo">
        <Box className="sitterInfo">
          <Box className="avatar">
            <Image src={avatar} alt="avatar" />
          </Box>
          <Box>
            <Heading className="sitterName">Elise & Michael</Heading>
            <Text className="headline">Baxter&apos; Friends With Paws</Text>
            <Text className="location">Adelaide</Text>
          </Box>
          <Box className="favorite" onClick={handleFavorite}>
            <Image src={favorite ? filledHeart : voidHeart} alt="avatar" />
          </Box>
        </Box>
        <Box className="buttonContainer">
          <StyledButton onClick={handleToChat}>Contact Elise & Micheal</StyledButton>
        </Box>
        <Box className="cancellation">
          <Heading>Cancellation policy: Flexible</Heading>
          <Box className="policy">
            <Text>
              <chakra.span fontWeight="bold">Full refund</chakra.span> if canceled before{" "}
              <chakra.span fontWeight="bold">12:00 p.m.</chakra.span> one day before the booking,{" "}
              <chakra.span fontWeight="bold">50% refund afterward.</chakra.span>
            </Text>
            <Text>
              <chakra.span fontWeight="bold">No</chakra.span> refund is payable if the booking is
              canceled <chakra.span fontWeight="bold">on</chakra.span> or{" "}
              <chakra.span fontWeight="bold">after the start date.</chakra.span>
            </Text>
            <Text> Note: All times are based on the sitter&apos;s time zone.</Text>
          </Box>
        </Box>
      </Box>

      <StyledImageBox>{image}</StyledImageBox>
      <Box className="guarantee">
        <Text>
          Book via Pawshake to enjoy The <Link>Pawshake Guarantee,</Link> in-house customer support,
          booking guarantee, safe cashless payments, no booking fees, no change fees, daily updates
          and more!
        </Text>
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  &&& {
    margin: 0;
    padding: 0;
    color: black;
    box-sizing: border-box;
    text-decoration: none;
    width: 400px;

    .contactInfo {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      margin-top: 1rem;
      margin-left: 1rem;
      border: 1.5px solid lightgrey;
      border-radius: 3px;

      .sitterInfo {
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        align-items: start;
        .avatar {
          border: 1px solid #808080;
          height: 6rem;
          width: 6rem;
          border-radius: 50%;
          overflow: hidden;
        }
        .sitterName {
          font-size: 1.5rem;
          font-weight: 500;
        }
        .location {
          color: #707070;
        }
        .favorite {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2rem;
          width: 2rem;
          cursor: pointer;
        }
      }
      .buttonContainer {
        display: flex;
        width: 100%;
        justify-content: center;
        border-top: 1.5px solid lightgrey;
        border-bottom: 1.5px solid lightgrey;
        padding: 1rem 0;
      }
      .cancellation {
        margin-top: 1rem;
        .chakra-heading {
          font-weight: 500;
          font-size: 1.2rem;
          color: #707070;
          margin-bottom: 0.5rem;
        }
        .policy {
          color: #909090;
          font-size: 0.9rem;
          font-weight: 500;
          gap: 1rem;
          .chakra-text {
            padding-top: 0.5rem;
          }
        }
      }
    }
    .guarantee {
      padding-left: 1rem;
      text-align: center;
      font-weight: 500;
      color: #909090;
      margin-bottom: 4rem;
      .chakra-link {
        color: #5cace2;
        text-decoration: none;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: pink;
    color: #ffffff;
    font-weight: 700;
    padding: 1rem;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }
`;
export const StyledImageBox = styled(Box)`
  &&& {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    flex-wrap: wrap;
    height: auto;
    padding-left: 1rem;
    .chakra-image {
      max-width: 4rem;
      margin-right: 0.5rem;
    }

    @media (max-width: 50rem) {
      display: flex;
      flex-wrap: no-wrap;
      width: 100%;
      height: auto;
      .chakra-image {
        width: 27%;
        margin-right: 0.5rem;
      }
    }
  }
`;
export default ContactSitter;

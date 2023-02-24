import React from "react";
import { Box, Heading, Link, Flex, Image, Select, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#5cace2" bottom="0" position="fixed" width="100%">
      <Flex
        padding="3rem"
        paddingLeft="10rem"
        justifyContent="space-between"
        color="white"
        fontWeight="700"
      >
        <Box>
          <Heading size="lg">Learn More</Heading>
          <ul>
            <li>
              <Link>How does Pawshake work?</Link>
            </li>
            <li>
              <Link>Testimonials</Link>
            </li>
            <li>
              <Link>The Pawshake Guarantee</Link>
            </li>
            <li>
              <Link>Payments and refunds</Link>
            </li>
            <li>
              <Link>FAQ for Pet Owners</Link>
            </li>
            <li>
              <Link>FAQ for Pet Sitters</Link>
            </li>
            <li>
              <Link>Dog boarding</Link>
            </li>
            <li>
              <Link>Doggy day care</Link>
            </li>
            <li>
              <Link>Dog walking</Link>
            </li>
            <li>
              <Link>Cat sitting</Link>
            </li>
            <li>
              <Link>Dog sitting</Link>
            </li>
            <li>
              <Link>Pet sitting</Link>
            </li>
            <li>
              <Link>House sitting</Link>
            </li>
          </ul>
        </Box>

        <Box>
          <Heading size="lg">Popular Cities</Heading>
          <ul>
            <li>
              <Link>Melbourne</Link>
            </li>
            <li>
              <Link>Sydney</Link>
            </li>
            <li>
              <Link>Brisbane</Link>
            </li>
            <li>
              <Link>Perth</Link>
            </li>
            <li>
              <Link>Adelaide</Link>
            </li>
            <li>
              <Link>Gold Coast</Link>
            </li>
            <li>
              <Link>Sunshine Coast</Link>
            </li>
            <li>
              <Link>Penrith</Link>
            </li>
            <li>
              <Link>Tweed Heads</Link>
            </li>
            <li>
              <Link>Mornington</Link>
            </li>
          </ul>
          <Link mt="20px">Top doggy day care cities</Link>
        </Box>

        <Box>
          <Heading size="lg">About Us</Heading>
          <ul>
            <li>
              <Link>Our Story</Link>
            </li>
            <li>
              <Link>In the press</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Help</Link>
            </li>
          </ul>
          <Heading size="lg" mt="20px">
            Payment Methods
          </Heading>
          <Flex mb="20px">
            <Image
              src="https://static1.pawshakecdn.com/payment-methods/visa.svg"
              mr="10px"
              borderRadius="5px"
            />
            <Image
              src="https://static1.pawshakecdn.com/payment-methods/mastercard.svg"
              mr="10px"
              borderRadius="5px"
            />
            <Image
              src="https://static1.pawshakecdn.com/payment-methods/americanExpress.svg"
              borderRadius="5px"
            />
          </Flex>
        </Box>
        <Box>
          <Heading size="lg">Find us on</Heading>
          <ul>
            <li>
              <Link href="https://www.facebook.com/">Facebook</Link>
            </li>
            <li>
              <Link href="https://twitter.com/">Twitter</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">Instagram</Link>
            </li>
          </ul>
        </Box>
      </Flex>
      <Flex
        bg="rgb(81, 151, 198)"
        padding="20px"
        paddingLeft="150px"
        justifyContent="space-between"
        color="white"
      >
        <Text fontWeight="700" fontSize="1rem">
          Copyright © 2023 Pet-Nany Inc. All Rights Reserved.{" "}
          <Link textDecoration="underline" cursor="pointer">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link textDecoration="underline" cursor="pointer">
            Privacy & Cookie Policy
          </Link>
          .
        </Text>
        <Select width="200px" height="55px" padding="10px" marginRight="150px">
          <option value="Australia(EN)">Australia(EN)</option>
          <option value="Canada(EN)">Canada(EN)</option>
          <option value="HongKong(CN)">HongKong(CN)</option>
          <option value="Amercia(EN)">Amercia(EN)</option>
        </Select>
      </Flex>
    </Box>
  );
};

export default Footer;

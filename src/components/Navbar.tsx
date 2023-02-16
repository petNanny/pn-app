import React from "react";
import { useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function changeIsLoggedStatus() {
    setIsLoggedIn((prevIsLoggedStatus: boolean) => {
      return !prevIsLoggedStatus;
    });
  }

  return (
    <Flex bg="#5CACE2" as="nav" height="5em" p="0 1em" alignItems="center">
      <Button height="100%" colorScheme="#5CACE2">
        <NavLink to="/">
          <Heading as="h1" color="white">
            PetNanny
          </Heading>
        </NavLink>
      </Button>

      <Spacer />

      <Button marginRight="1.5em">
        <Text color="#5CACE2">Search Sitters</Text>
      </Button>

      {!isLoggedIn && (
        <HStack spacing="1.5em">
          <NavLink to="/register">
            <Text color="white">Become a Sitter</Text>
          </NavLink>
          <NavLink to="/register">
            <Text color="white">Sign up</Text>
          </NavLink>
          <NavLink to="/login" onClick={changeIsLoggedStatus}>
            <Text color="white">Login</Text>
          </NavLink>
          <NavLink to="/adminPage">
            <Text color="white">Admin</Text>
          </NavLink>
        </HStack>
      )}

      {isLoggedIn && (
        <HStack height="100%" spacing="1em">
          <HStack height="100%" spacing="0.5em">
            <Menu>
              <Avatar name="M" src="" bg="gray" color="white" />
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="#5CACE2"
                height="80%"
                padding="0em"
              >
                {`Mark  `}

                <Icon viewBox="0 0 200 200" color="red.500">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NavLink to="#">Dashboard</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="#">Messages</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="#">Profile</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="#">Review</NavLink>
                </MenuItem>
                <MenuItem onClick={changeIsLoggedStatus}>
                  <NavLink to="#">Logout</NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Button height="100%" colorScheme="#5CACE2">
            <Icon as={AiOutlineMail} boxSize={6} color="white" />
          </Button>
          <Button height="100%" colorScheme="#5CACE2">
            <Icon as={AiOutlineBell} boxSize={6} color="white" />
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;

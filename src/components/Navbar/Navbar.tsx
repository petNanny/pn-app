import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useCallback } from "react";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import {
  Button,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import {
  NavLinkText,
  NavbarSearchSittersButton,
  NavbarLogoButton,
  NavbarStyle,
  SidebarLinkText,
  SidebarLogo,
  SidebarLine,
  ProfileImage,
  NavbarFunction,
  SidebarFunction,
  SidebarProfileLinkText,
} from "./styledNavbar";
import { useSendLogoutMutation } from "../../redux/authApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RedPoint from "./RedPoint";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hasPetOwner = useSelector((state: any) => !!state.petOwner._id);
  const petOwner = useSelector((state: any) => state.petOwner);

  const hasPetSitter = petOwner.roles.includes("PetSitter");

  const [sendLogout, { isSuccess }] = useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "auth/logout" });
      navigate(`/login`);
    }
  }, [isSuccess]);

  const logout = useCallback(() => {
    sendLogout(true);
  }, [sendLogout]);

  return (
    <NavbarStyle>
      <SidebarFunction>
        {!hasPetOwner && (
          <HStack>
            <Button colorScheme={theme.colors.background.primary} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <NavLink to="/becomePetSitter">
                  <SidebarLinkText>Become a Sitter</SidebarLinkText>
                </NavLink>
                <NavLink to="/register">
                  <SidebarLinkText>Sign up</SidebarLinkText>
                </NavLink>
                <NavLink to="/login">
                  <SidebarLinkText>Login</SidebarLinkText>
                </NavLink>
                <SidebarLine />
                <NavLink to="/adminLogin">
                  <SidebarLinkText>Admin</SidebarLinkText>
                </NavLink>
                <SidebarLogo>
                  <Heading className="SidebarLogo__heading__style">PetNanny</Heading>
                </SidebarLogo>
              </DrawerContent>
            </Drawer>
          </HStack>
        )}

        {petOwner && hasPetOwner && (
          <HStack>
            <Button colorScheme={theme.colors.background.primary} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader>
                  <ProfileImage
                    size="xl"
                    name={petOwner.userName}
                    src={petOwner.avatar}
                    bg={`${theme.colors.background.grey}`}
                  />
                </DrawerHeader>
                <SidebarLinkText statusColor>{petOwner.userName}</SidebarLinkText>
                <NavLink to="#">
                  <SidebarLinkText>Dashboard</SidebarLinkText>
                </NavLink>
                <NavLink to={`/message/${petOwner._id}`}>
                  <SidebarLinkText>Messages</SidebarLinkText>
                </NavLink>
                <Box maxHeight="500px" overflow="auto" minHeight="50px">
                  <Accordion allowToggle>
                    <AccordionItem border="none">
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <SidebarProfileLinkText>Profile</SidebarProfileLinkText>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <NavLink to={`/userProfile/about-me/${petOwner._id}`} onClick={onClose}>
                          <SidebarLinkText>About me</SidebarLinkText>
                        </NavLink>
                        <NavLink to={`/userProfile/my-pets/${petOwner._id}`} onClick={onClose}>
                          <SidebarLinkText>My pets</SidebarLinkText>
                        </NavLink>
                        {hasPetSitter && (
                          <>
                            <NavLink to={`/userProfile/address/${petOwner._id}`} onClick={onClose}>
                              <SidebarLinkText>My address</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/pet-service/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Services</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/pet-preference/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Pet preferences</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/home-area/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>My home and area</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/description/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Description</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/profile-gallery/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Profile gallery</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/experience/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Experience</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/payment-information/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Payout method</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/legal-requirement/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Legal requirement</SidebarLinkText>
                            </NavLink>
                            <NavLink
                              to={`/userProfile/submission/${petOwner._id}`}
                              onClick={onClose}
                            >
                              <SidebarLinkText>Complete sitter application</SidebarLinkText>
                            </NavLink>
                          </>
                        )}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <NavLink to="#">
                  <SidebarLinkText>Review</SidebarLinkText>
                </NavLink>
                <NavLink to="#">
                  <SidebarLinkText onClick={logout}>Logout</SidebarLinkText>
                </NavLink>
                <NavLink to="/">
                  <SidebarLogo>
                    <Heading className="SidebarLogo__heading__style">PetNanny</Heading>
                  </SidebarLogo>
                </NavLink>
              </DrawerContent>
            </Drawer>
          </HStack>
        )}
      </SidebarFunction>

      <NavbarLogoButton>
        <NavLink to="/">
          <Heading className="navLogoButton__heading__style">PetNanny</Heading>
        </NavLink>
      </NavbarLogoButton>

      <Spacer />

      <NavbarFunction>
        <NavLink to="/">
          <Text
            backgroundColor="#edf2f7"
            marginRight="1.5rem"
            padding="0.5rem 1rem"
            borderRadius="0.375rem"
            color={theme.colors.background.primary}
            fontWeight="bold"
          >
            Search Sitters
          </Text>
        </NavLink>
        {!hasPetSitter && (
          <NavLink to="/becomePetSitter">
            <NavLinkText>Become a Sitter</NavLinkText>
          </NavLink>
        )}
        {!hasPetOwner && (
          <HStack spacing="1.5rem">
            {/* <NavLink to="/becomePetSitter">
              <NavLinkText>Become a Sitter</NavLinkText>
            </NavLink> */}
            <NavLink to="/register">
              <NavLinkText>Sign up</NavLinkText>
            </NavLink>
            <NavLink to="/login">
              <NavLinkText>Login</NavLinkText>
            </NavLink>
            <NavLink to="/adminLogin">
              <NavLinkText>Admin</NavLinkText>
            </NavLink>
          </HStack>
        )}

        {petOwner && hasPetOwner && (
          <HStack spacing="1rem">
            <Box display="flex" alignItems="center">
              <Menu>
                {({ isOpen }) => (
                  <>
                    <ProfileImage
                      name={petOwner.userName}
                      src={petOwner.avatar}
                      bg={`${theme.colors.background.grey}`}
                    />
                    <MenuButton
                      as={Button}
                      rightIcon={
                        isOpen ? (
                          <ChevronUpIcon cursor="pointer" />
                        ) : (
                          <ChevronDownIcon cursor="pointer" />
                        )
                      }
                      colorScheme="#5CACE2"
                    >
                      {petOwner.userName}
                      <RedPoint />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <NavLink to="#">Dashboard</NavLink>
                      </MenuItem>
                      <MenuItem onClick={() => navigate(`/message/${petOwner._id}`)}>
                        Messages
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate(`/userProfile/availability/${petOwner._id}`)}
                      >
                        Calendar
                      </MenuItem>
                      <MenuItem onClick={() => navigate(`/userProfile/about-me/${petOwner._id}`)}>
                        Profile
                      </MenuItem>
                      <MenuItem>
                        <NavLink to="#">Review</NavLink>
                      </MenuItem>
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
            <Button bg="#21bdbd" onClick={() => navigate(`/message/${petOwner._id}`)}>
              <Icon as={AiOutlineMail} boxSize={6} color="white" />
            </Button>
            <Button bg="#21bdbd">
              <Icon as={AiOutlineBell} boxSize={6} color="white" />
            </Button>
          </HStack>
        )}
      </NavbarFunction>
    </NavbarStyle>
  );
};

export default Navbar;

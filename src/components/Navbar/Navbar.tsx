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
} from "./styledNavbar";
import { useSendLogoutMutation } from "../../redux/authApi";
import { useGetOnePetOwnerQuery } from "../../redux/petOwnerApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RedPoint from "./RedPoint";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hasPetOwner = useSelector((state: any) => !!state.petOwner._id);
  const petOwner = useSelector((state: any) => state.petOwner);

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
                <NavLink to="/adminPage">
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
                <NavLink to={`/userProfile/about-me/${petOwner._id}`}>
                  <SidebarLinkText>Profile</SidebarLinkText>
                </NavLink>
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
        <NavbarSearchSittersButton>
          <Text className="navSearchSittersButton__text__color">Search Sitters</Text>
        </NavbarSearchSittersButton>

        {!hasPetOwner && (
          <HStack spacing="1.5rem">
            <NavLink to="/becomePetSitter">
              <NavLinkText>Become a Sitter</NavLinkText>
            </NavLink>
            <NavLink to="/register">
              <NavLinkText>Sign up</NavLinkText>
            </NavLink>
            <NavLink to="/login">
              <NavLinkText>Login</NavLinkText>
            </NavLink>
            <NavLink to="/adminPage">
              <NavLinkText>Admin</NavLinkText>
            </NavLink>
          </HStack>
        )}

        {petOwner && hasPetOwner && (
          <HStack spacing="1rem">
            <HStack spacing="0.5rem">
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
            </HStack>
            <Button bg="#5CACE2">
              <Icon as={AiOutlineMail} boxSize={6} color="white" />
            </Button>
            <Button bg="#5CACE2">
              <Icon as={AiOutlineBell} boxSize={6} color="white" />
            </Button>
          </HStack>
        )}
      </NavbarFunction>
    </NavbarStyle>
  );
};

export default Navbar;

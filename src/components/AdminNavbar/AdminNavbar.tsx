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
} from "./styledAdminNavbar";
import { useAdminSendLogoutMutation } from "../../redux/adminApi";
import { useStoreDispatch, useStoreSelector } from "../../store/hook";
import RedPoint from "./AdminRedPoint";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hasAdminUser = useStoreSelector((state) => !!state.adminUser._id);
  const adminUser = useStoreSelector((state) => state.adminUser);

  const [AdminSendLogout, { isSuccess }] = useAdminSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "admin/logout" });
      navigate(`/adminLogin`);
    }
  }, [isSuccess]);

  const logout = useCallback(() => {
    AdminSendLogout(true);
  }, [AdminSendLogout]);

  return (
    <NavbarStyle>
      <SidebarFunction>
        {!hasAdminUser && (
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

        {adminUser && hasAdminUser && (
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
                    name={adminUser.userName}
                    src={adminUser.avatar}
                    bg={`${theme.colors.background.grey}`}
                  />
                </DrawerHeader>
                <SidebarLinkText statusColor>{adminUser.userName}</SidebarLinkText>
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
        {!hasAdminUser && (
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
            <NavLink to="/adminLogin">
              <NavLinkText>Admin</NavLinkText>
            </NavLink>
          </HStack>
        )}

        {adminUser && hasAdminUser && (
          <HStack spacing="1rem">
            <HStack spacing="0.5rem">
              <Menu>
                {({ isOpen }) => (
                  <>
                    <ProfileImage
                      name={adminUser.userName}
                      src={adminUser.avatar}
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
                      {adminUser.userName}
                      <RedPoint />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <NavLink to="#">{adminUser.userName}</NavLink>
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

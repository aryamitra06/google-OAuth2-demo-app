import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Posts",
    link: "/posts",
  },
];

export default function Navbar({ userData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const googleLogout = () => {
    window.open("http://localhost:8443/api/auth/google/logout", "_self");
  };

  const isUserLoggedIn = userData?.isLoggedIn;

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>App</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ title, link }) => (
                <Link to={link} key={link}>
                  {title}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {isUserLoggedIn && (
              <>
                <Button
                  variant={"solid"}
                  colorScheme={"red"}
                  size={"sm"}
                  mr={4}
                  onClick={googleLogout}
                >
                  Log out
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={userData?.user?.photos[0]?.value}
                      referrerPolicy="no-referrer"
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>{userData?.user?.displayName}</MenuItem>
                    <MenuDivider />
                    <MenuItem>{userData?.user?.emails[0]?.value}</MenuItem>
                    <MenuItem>
                      Email Verified:{" "}
                      {userData?.user?.emails[0]?.verified ? "YES" : "NO"}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ title, link }) => (
                <Link to={link} key={link}>
                  {title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

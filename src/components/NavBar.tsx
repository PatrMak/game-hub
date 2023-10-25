import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearachInput from "./SearachInput";



const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearachInput  />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

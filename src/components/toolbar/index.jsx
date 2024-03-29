import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import Icon from "@chakra-ui/icon"
import { Flex, Text } from "@chakra-ui/layout"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal"
import { useRef } from "react"
import { Buy, Category } from "react-iconly"
import { aboutUs, home } from "../../constants"
import NavigationItem from "./navigationItem"

const Toolbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <Flex
      h="80px"
      w="100%"
      justifyContent="center"
      alignItems="center"
      boxShadow="0 1px 5px #3182CE"
      zIndex="10"
      bgColor="#fff"
    >
      <Flex
        maxWidth="1536px"
        w="100%"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="#3182CE" ml="30px" fontWeight="bold">
          INVENTORY
        </Text>
        <Flex
          display={{ base: "none", md: "flex" }}
          alignSelf="end"
          justifyContent="end"
          h="100%"
          alignItems="center"
          mr="20px"
          flexDir="row-reverse"
        >
          <NavigationItem text={home} to="/" />
          <NavigationItem text={aboutUs} to="/about" />
        </Flex>
        <Flex
          mx="10px"
          cursor="pointer"
          display={{ base: "flex", md: "none" }}
          w="100%"
          justifyContent="end"
        >
          <Icon
            as={Category}
            set="bulk"
            primaryColor="#3182CE"
            fontSize="30px"
            ref={btnRef}
            onClick={onOpen}
          />
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <Flex
                alignSelf="end"
                justifyContent="end"
                h="100px"
                alignItems="center"
                w="100%"
                flexDir="column"
                onClick={onClose}
                mt={{ base: "30px", md: "0" }}
              >
                <NavigationItem text={home} to="/" />
                <NavigationItem text={aboutUs} to="/about" />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  )
}

export default Toolbar

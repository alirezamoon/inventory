import { Flex } from "@chakra-ui/layout"
import Toolbar from "../toolbar"

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column" minH="100vh" bgColor="#F7FAFC">
      <Toolbar />
      <Flex
        as="main"
        minH="100%"
        w="100%"
        justifyContent="center"
        py="50px"
        px={{ base: "8px", md: "16px" }}
      >
        <Flex
          maxW="1200px"
          w="100%"
          bgColor="white"
          borderRadius="20px"
          p="20px"
          boxShadow="0 0 5px #eee"
          flexDir="column"
          position="relative"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Layout

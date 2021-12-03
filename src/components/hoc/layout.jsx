import { Flex } from '@chakra-ui/layout'
import Toolbar from '../toolbar'

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column">
      <Toolbar />
      <Flex
        as="main"
        minH="100vh"
        w="100%"
        bgColor="#F7FAFC"
        justifyContent="center"
        py="50px"
      >
        <Flex
          maxW="1200px"
          w="100%"
          bgColor="white"
          borderRadius="20px"
          p="20px"
          boxShadow="0 0 5px #eee"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Layout

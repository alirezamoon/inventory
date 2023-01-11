import { Button } from "@chakra-ui/button"
import { Flex } from "@chakra-ui/layout"
import { useDisclosure } from "@chakra-ui/react"
import Products from "../products"
import Search from "./../search"
import AddProductModal from "./../products/addProductModal"

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Flex flexDir="column">
      <Flex
        justifyContent="space-between"
        w="100%"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
      >
        <Button
          onClick={onOpen}
          bgColor="F7FAFC"
          w={{ base: "100%", md: "150px" }}
          borderRadius="10px"
        >
          افزودن
        </Button>
        <Search />
      </Flex>
      <Products />
      <AddProductModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  )
}

export default Home

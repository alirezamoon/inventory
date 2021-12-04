import { Button } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import Products from '../products'
import Search from './../toolbar/search'
import AddProductModal from './../products/addProductModal'

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between" w="100%" alignItems="center">
        <Button onClick={onOpen}>افزودن</Button>
        <Search />
      </Flex>
      <Products />
      <AddProductModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  )
}

export default Home

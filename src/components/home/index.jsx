import { Button } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import ProductsTable from '../productsTable'
import Search from './../toolbar/search'
const Home = () => {
  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between" w="100%" alignItems="center">
        <Button>افزودن</Button>
        <Search />
      </Flex>
      <ProductsTable />
    </Flex>
  )
}

export default Home

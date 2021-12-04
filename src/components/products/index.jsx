import { Flex } from '@chakra-ui/layout'
import Product from './product'
import ProdutctsTableHeader from './productsTableHeader'
// import { products } from '../../data'
import { useSelector } from 'react-redux'
const ProductsTable = () => {
  const products = useSelector((state) => state.products.products)
  const searchTerm = useSelector((state) => state.products.searchTerm)
  const searchedProducts = useSelector(
    (state) => state.products.searchedProducts
  )
  console.log(products)
  return (
    <Flex flexDir="column" mt={{ base: '10px', md: '50px' }}>
      <ProdutctsTableHeader />
      {searchTerm?.length != 0
        ? searchedProducts.map((product, i) => (
            <Product {...product} key={i} count={i} />
          ))
        : products.map((product, i) => (
            <Product {...product} key={i} count={i} />
          ))}
    </Flex>
  )
}

export default ProductsTable

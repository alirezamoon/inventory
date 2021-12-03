import { Flex } from '@chakra-ui/layout'
import Product from './product'
import ProdutctsTableHeader from './productsTableHeader'
// import { products } from '../../data'
import { useSelector } from 'react-redux'
const ProductsTable = () => {
  const products = useSelector((state) => state.products.products)
  console.log(products)
  return (
    <Flex flexDir="column" mt="50px">
      <ProdutctsTableHeader />
      {products.map((product, i) => (
        <Product {...product} key={i} count={i} />
      ))}
    </Flex>
  )
}

export default ProductsTable

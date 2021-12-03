import { Flex } from '@chakra-ui/layout'
import Product from './product'
import ProdutctsTableHeader from './productsTableHeader'
import { products } from './../../data'
const ProductsTable = () => {
  return (
    <Flex flexDir="column" mt="50px">
      <ProdutctsTableHeader />
      {products.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          price={product.price}
          off={product.off}
          company={product.company}
        />
      ))}
    </Flex>
  )
}

export default ProductsTable

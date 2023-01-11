import { Flex } from "@chakra-ui/layout"
import Product from "./product"
import ProdutctsTableHeader from "./productsTableHeader"
import { useSelector } from "react-redux"
import MobileProduct from "./mobileProduct"
const ProductsTable = () => {
  const products = useSelector((state) => state.products.products)
  const searchTerm = useSelector((state) => state.products.searchTerm)
  const searchedProducts = useSelector(
    (state) => state.products.searchedProducts
  )

  return (
    <Flex
      flexDir="column"
      mt={{ base: "10px", md: "50px" }}
      w="100%"
      overflowX="auto"
    >
      <Flex flexDir="column" minW="768px" d={{ base: "none", md: "flex" }}>
        <ProdutctsTableHeader />
        {searchTerm?.length != 0
          ? searchedProducts.map((product, i) => (
              <Product {...product} key={i} count={i} />
            ))
          : products.map((product, i) => (
              <Product {...product} key={i} count={i} />
            ))}
      </Flex>
      <Flex
        d={{ base: "flex", md: "none" }}
        gap={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        {searchTerm?.length !== 0
          ? searchedProducts.map((product, i) => (
              <MobileProduct {...product} key={i} />
            ))
          : products.map((product, i) => (
              <MobileProduct {...product} key={i} />
            ))}
      </Flex>
    </Flex>
  )
}

export default ProductsTable

import { Flex, Text, Image, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { getOneProduct } from '../../store/features/productSlice'

const ProductPage = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const dispath = useDispatch()
  useEffect(() => {
    dispath(getOneProduct(id))
  }, [])
  const product = useSelector((state) => state.products.product)
  const { name, company, off, price, image, numberOfProducts } = product

  return (
    <Flex flexDir="column">
      <Flex justifyContent="center">
        <Flex
          flexDir="column"
          alignItems="end"
          mr="100px"
          justifyContent="space-evenly"
          bgColor="#F7FAFC"
          w="300px"
          borderRadius="10px"
          p="20px"
        >
          <Flex justifyContent="space-between" w="100%">
            <Text w="100px">{name}</Text>
            <Text>: نام</Text>
          </Flex>
          <Flex justifyContent="space-between" w="100%">
            <Text w="100px">{company}</Text>
            <Text>: شرکت</Text>
          </Flex>
          <Flex justifyContent="space-between" w="100%">
            <Text w="100px">{numberOfProducts}</Text>
            <Text>: تعداد</Text>
          </Flex>
          <Flex justifyContent="space-between" w="100%">
            <Text w="100px">{price}$</Text>
            <Text textAlign="right">: قیمت</Text>
          </Flex>
          <Flex justifyContent="space-between" w="100%">
            <Text w="100px">{off == 0 ? '-' : off + '%'}</Text>
            <Text>: تخفیف</Text>
          </Flex>
          <Flex justifyContent="space-between" w="100%">
            <Text w="100px">{price - (price * off) / 100}$</Text>
            <Text>: قیمت نهایی</Text>
          </Flex>
        </Flex>
        <Flex>
          <Image
            w="300px"
            h="300px"
            src={image}
            objectFit="cover"
            borderRadius="10px"
          />
        </Flex>
      </Flex>
      <Button alignSelf="center" maxW="200px" mt="100px" colorScheme="blue">
        ارسال سفارش
      </Button>
    </Flex>
  )
}

export default ProductPage

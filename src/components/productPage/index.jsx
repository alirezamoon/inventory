import { Flex, Text, Image, Button, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { parse } from 'uuid'
import {
  editSingleProduct,
  getOneProduct,
} from '../../store/features/productSlice'
import MyNumberInput from '../ui/numberInput'

const ProductPage = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [number, setNumber] = useState('1')
  const toast = useToast()

  const dispath = useDispatch()
  useEffect(() => {
    dispath(getOneProduct(id))
  }, [])

  const product = useSelector((state) => state.products.product)
  const { name, company, off, price, image, numberOfProducts } = product
  const priceWithOff = price - (price * off) / 100
  const [newProduct, setNewProduct] = useState({
    id: id,
    name: name,
    price: price,
    company: company,
    numberOfProducts: numberOfProducts,
    off: off,
    image: image,
  })

  useEffect(() => {
    setNewProduct({
      id: id,
      name: name,
      price: price,
      company: company,
      numberOfProducts: numberOfProducts,
      off: off,
      image: image,
    })
  }, [product])

  console.log(newProduct)
  return (
    <Flex flexDir="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir={{ base: 'column-reverse', md: 'row' }}
      >
        <Flex
          flexDir="column"
          alignItems="end"
          mr={{ base: '0', md: '100px' }}
          mt={{ base: '50px', md: '0' }}
          justifyContent="space-evenly"
          bgColor="#F7FAFC"
          maxW="300px"
          h="300px"
          w="100%"
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
            <Text w="100px">{newProduct.numberOfProducts}</Text>
            <Text>: موجودی</Text>
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
            <Text w="100px">{priceWithOff}$</Text>
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
      <Flex
        mt={{ base: '50px', md: '100px' }}
        alignSelf="center"
        alignItems="center"
      >
        <Flex mr="20px">
          <Text>
            {newProduct.numberOfProducts == 0 ? '0' : priceWithOff * number}$
          </Text>
          <Text> : قیمت کل</Text>
        </Flex>
        <MyNumberInput
          value={number}
          setValue={setNumber}
          label="تعداد"
          w="100px"
          max={newProduct.numberOfProducts}
          disabled={newProduct.numberOfProducts == 0}
        />
      </Flex>
      <Button
        disabled={newProduct.numberOfProducts == 0}
        alignSelf="center"
        maxW="200px"
        colorScheme="blue"
        mr="20px"
        mt="20px"
        onClick={() => {
          const n = newProduct.numberOfProducts - number
          console.log(n, newProduct)
          setNewProduct({
            id: id,
            name: name,
            price: price,
            company: company,
            off: off,
            image: image,
            numberOfProducts: n,
          })
          dispath(editSingleProduct(newProduct))
          dispath(getOneProduct(id))
          toast({
            title: 'سفارش',
            description: 'سفارش شما با موفقیت ارسال شد',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-right',
          })
        }}
      >
        ارسال سفارش
      </Button>
    </Flex>
  )
}

export default ProductPage

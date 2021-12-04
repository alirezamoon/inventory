import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/layout'
import { Delete, Edit } from 'react-iconly'

const Product = ({
  id,
  name,
  price,
  off,
  company,
  count,
  numberOfProducts,
}) => {
  return (
    <Flex
      flexDir="row-reverse"
      bgColor={id % 2 === 1 ? '#F7FAFC' : '#fff'}
      justifyContent="end"
      alignItems="center"
      h="50px"
    >
      <Text
        minW={{ base: '30px', md: '50px' }}
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {count + 1}
      </Text>
      <Text
        w="150px"
        minW="100px"
        fontWeight="bold"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {name}
      </Text>
      <Text
        minW="50px"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        d={{ base: 'none', md: 'block' }}
      >
        {numberOfProducts}
      </Text>
      <Text
        minW="150px"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        d={{ base: 'none', md: 'block' }}
      >
        {price} $
      </Text>
      <Flex flexGrow={1} flexDir="row-reverse" justifyContent="start">
        <Icon
          fontSize="20px"
          color="#777"
          cursor="pointer"
          minW="50px"
          as={Edit}
        />
        <Icon
          fontSize="20px"
          color="#f00"
          cursor="pointer"
          minW="50px"
          as={Delete}
        />
        <Button
          variant="link"
          minW="62px"
          maxW="150px"
          w="100%"
          color="#3182CE"
          fontSize={{ base: '12px', sm: '14', md: 'unset' }}
          _focus={{ outline: 0 }}
        >
          بیشتر
        </Button>
      </Flex>
    </Flex>
  )
}

export default Product

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
      <Text w="50px">{count + 1}</Text>
      <Text w="150px" fontWeight="bold">
        {name}
      </Text>
      <Text w="150px">{numberOfProducts}</Text>
      <Text w="150px">{price} $</Text>
      <Icon
        fontSize="20px"
        color="#3182CE"
        cursor="pointer"
        w="150px"
        as={Edit}
      />
      <Icon
        fontSize="20px"
        color="#3182CE"
        cursor="pointer"
        w="150px"
        as={Delete}
      />
      <Button variant="link" flexGrow={1} color="#3182CE">
        مشاهده بیشتر
      </Button>
    </Flex>
  )
}

export default Product

import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/layout'
import { Delete, Edit } from 'react-iconly'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOneProduct } from '../../store/features/productSlice'
import DeleteProductModal from './deleteProductModal'
import EditProductModal from './editProductModal'

const Product = ({
  id,
  name,
  price,
  off,
  company,
  count,
  numberOfProducts,
}) => {
  const navigate = useNavigate()
  // console.log(navigate)
  const dispatch = useDispatch()
  const {
    isOpen: isDeleteOpen,
    onClose: onDeleteClose,
    onOpen: onDeleteOpen,
  } = useDisclosure()
  const {
    isOpen: isEditOpen,
    onClose: onEditClose,
    onOpen: onEditOpen,
  } = useDisclosure()

  return (
    <Flex
      flexDir="row-reverse"
      bgColor={count % 2 === 1 ? '#F7FAFC' : '#fff'}
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
          onClick={onEditOpen}
        />
        <Icon
          fontSize="20px"
          color="#f00"
          cursor="pointer"
          minW="50px"
          as={Delete}
          onClick={onDeleteOpen}
        />
        <Button
          variant="link"
          minW="62px"
          maxW="150px"
          w="100%"
          color="#3182CE"
          fontSize={{ base: '12px', sm: '14', md: 'unset' }}
          _focus={{ outline: 0 }}
          onClick={() => {
            // dispatch(getOneProduct(id))
            navigate(`product/${id}`)
          }}
        >
          بیشتر
        </Button>
      </Flex>
      <DeleteProductModal
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        id={id}
      />
      <EditProductModal isOpen={isEditOpen} onClose={onEditClose} id={id} />
    </Flex>
  )
}

export default Product

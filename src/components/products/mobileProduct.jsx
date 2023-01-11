import {
  Button,
  Flex,
  Icon,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react"
import { Delete, Edit } from "react-iconly"
import { useNavigate } from "react-router-dom"
import DeleteProductModal from "./deleteProductModal"
import EditProductModal from "./editProductModal"

const MobileProduct = ({ name, price, numberOfProducts, id }) => {
  const navigate = useNavigate()

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
      bgColor="gray.300"
      borderRadius={10}
      flexDir="column"
      maxW="300px"
      w="100%"
      p="10px"
      flexGrow={1}
      boxShadow="1px 1px 5px #adcdeb"
    >
      <Flex
        flexDir="row-reverse"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #fff"
        pb={2}
        mb={2}
      >
        <Flex borderLeft="1px solid #fff" w="50%" justifyContent="center">
          <Text
            fontWeight="bold"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {name}
          </Text>
        </Flex>
        <Flex justifyContent="space-around" flexGrow={1} alignItems="center">
          <Flex flexDir="column">
            <Text fontSize={10}>تعداد</Text>
            <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              {numberOfProducts}
            </Text>
          </Flex>
          <Flex flexDir="column">
            <Text fontSize={10}>قیمت</Text>
            <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              {price} $
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir="row-reverse" alignItems="center">
        <Flex
          w="50%"
          h="24px"
          borderLeft="1px solid #fff"
          justifyContent="center"
          alignItems="center"
        >
          <Tooltip label="ویرایش" hasArrow>
            <Flex h="max-content">
              <Icon
                fontSize="20px"
                color="#777"
                cursor="pointer"
                minW="50px"
                as={Edit}
                onClick={onEditOpen}
              />
            </Flex>
          </Tooltip>
          <Tooltip label="حذف" hasArrow>
            <Flex h="max-content">
              <Icon
                fontSize="20px"
                color="#f00"
                cursor="pointer"
                minW="50px"
                as={Delete}
                onClick={onDeleteOpen}
              />
            </Flex>
          </Tooltip>
        </Flex>
        <Button
          flexGrow={1}
          variant="link"
          color="#3182CE"
          fontSize="12px"
          _focus={{ outline: 0 }}
          onClick={() => {
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

export default MobileProduct

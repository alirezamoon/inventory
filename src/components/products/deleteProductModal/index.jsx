import { Button } from '@chakra-ui/button'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../store/features/productSlice'

const DeleteProductModal = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const deleteProductHandler = () => {
    onClose()
    dispatch(deleteProduct(id))
    toast({
      title: 'حذف محصول',
      description: 'محصول مورد نظر با موفقیت حذف گردید',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    })
  }
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="20px">
        <Flex flexDir="column">
          <Text fontSize="18px" textAlign="right">
            آیا از حذف این محصول از انبار مطمئن هستید ؟
          </Text>
          <Flex mt="30px" w="100%">
            <Button
              variant="outline"
              colorScheme="red"
              onClick={deleteProductHandler}
              flexGrow={1}
              mr="20px"
            >
              بله
            </Button>
            <Button colorScheme="blue" onClick={onClose} flexGrow={1}>
              خیر
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default DeleteProductModal

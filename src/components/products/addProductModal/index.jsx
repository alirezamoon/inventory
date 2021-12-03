import {
  Modal,
  ModalContent,
  ModalOverlay,
  Flex,
  Text,
  Input,
  Button,
  Image,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../store/features/productSlice'

const AddProductModal = ({ isOpen, onClose }) => {
  const inputRef = useRef()
  const [img, setImg] = useState('')
  const [imgURL, setImgURL] = useState('')
  const dispatch = useDispatch()
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    company: '',
    numberOfProducts: '',
    off: '',
    image: '',
  })
  console.log(newProduct)
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <Flex flexDir="column" p="20px">
          <Flex justifyContent="space-between">
            <Flex
              w="150px"
              h="150px"
              justifyContent="center"
              alignItems="center"
              border="2px solid #3182CE"
              borderRadius="8px"
              cursor="pointer"
              onClick={() => inputRef.current.click()}
              overflow="hidden"
            >
              {imgURL.length == 0 ? (
                <Text>+</Text>
              ) : (
                <Image w="150px" h="150px" src={imgURL} objectFit="cover" />
              )}
            </Flex>
            <Input
              type="file"
              d="none"
              ref={inputRef}
              onChange={(event) => {
                setImg(event.target.files[0])
                setImgURL(URL.createObjectURL(event.target.files[0]))
                setNewProduct({
                  ...newProduct,
                  image: URL.createObjectURL(event.target.files[0]),
                })
              }}
            />
            <Flex flexDir="column" justifyContent="space-around">
              <Input
                placeholder="نام محصول"
                dir="rtl"
                onChange={(event) =>
                  setNewProduct({ ...newProduct, name: event.target.value })
                }
              />
              <Input
                placeholder="شرکت"
                dir="rtl"
                onChange={(event) =>
                  setNewProduct({ ...newProduct, company: event.target.value })
                }
              />
            </Flex>
          </Flex>
          <Flex flexDir="row-reverse" mt="20px">
            <Input
              placeholder="قیمت"
              onChange={(event) =>
                setNewProduct({ ...newProduct, price: event.target.value })
              }
            />
            <Input
              mr="20px"
              placeholder="تخفیف"
              onChange={(event) =>
                setNewProduct({ ...newProduct, off: event.target.value })
              }
            />
            <Input
              mr="20px"
              placeholder="تعداد"
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  numberOfProducts: event.target.value,
                })
              }
            />
          </Flex>
          <Button
            colorScheme="blue"
            mt="20px"
            onClick={() => dispatch(addProduct(newProduct))}
          >
            افزودن محصول
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default AddProductModal

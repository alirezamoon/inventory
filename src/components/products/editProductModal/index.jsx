import {
  Modal,
  ModalContent,
  ModalOverlay,
  Flex,
  Text,
  Input,
  Button,
  Image,
  Tooltip,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  editProduct,
  getOneProduct,
} from '../../../store/features/productSlice'
import MyInput from '../../ui/input'
import MyNumberInput from '../../ui/numberInput'

const EditProductModal = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [isOpen])
  const product = useSelector((state) => state.products.product)
  const { name, company, off, price, image, numberOfProducts } = product
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
  const inputRef = useRef()

  const [number, setNumber] = useState(numberOfProducts)

  useEffect(() => {
    setNewProduct({
      ...newProduct,
      numberOfProducts: number,
    })
  }, [number])

  const toast = useToast()

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <Flex as="form" flexDir="column" p="20px">
          <Flex
            alignItems={{ base: 'center', md: 'unset' }}
            justifyContent="space-between"
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Flex
              w="150px"
              h="150px"
              justifyContent="center"
              alignItems="center"
              border={newProduct.image ? '' : '2px dashed #3182CE'}
              borderRadius="8px"
              cursor="pointer"
              onClick={() => inputRef.current.click()}
              overflow="hidden"
            >
              {!newProduct.image ? (
                <Tooltip label="افزودن عکس">
                  <Text fontSize="48px" color="#3182CE">
                    +
                  </Text>
                </Tooltip>
              ) : (
                <Tooltip label="تغییر عکس">
                  <Image
                    w="150px"
                    h="150px"
                    src={newProduct.image}
                    objectFit="cover"
                  />
                </Tooltip>
              )}
            </Flex>
            <Input
              type="file"
              d="none"
              ref={inputRef}
              onChange={(event) => {
                setNewProduct({
                  ...newProduct,
                  image: URL.createObjectURL(event.target.files[0]),
                })
              }}
            />
            <Flex
              flexDir="column"
              justifyContent="space-around"
              mt={{ base: '20px', md: '0' }}
            >
              <MyInput
                name="name"
                label="نام"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                ltr
              />
              <MyInput
                name="company"
                label="نام شرکت"
                value={newProduct.company}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, company: e.target.value })
                }
                ltr
                mt={{ base: '20px', md: '0' }}
              />
            </Flex>
          </Flex>
          <Flex
            flexDir={{ base: 'column', md: 'row-reverse' }}
            mt="20px"
            maxW={{ base: '150px', md: 'unset' }}
            justifyContent="center"
            alignSelf="center"
          >
            <MyInput
              name="price"
              label="قیمت"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              ltr
              hasIcon
              icon="$"
              mt={{ base: '10px', md: '0' }}
              w="100%"
            />

            <MyInput
              name="off"
              label="تخفیف"
              value={newProduct.off}
              onChange={(e) =>
                setNewProduct({ ...newProduct, off: e.target.value })
              }
              ltr
              w="100%"
              mr="15px"
              hasIcon
              icon="%"
              mt={{ base: '10px', md: '0' }}
            />
            <MyNumberInput
              value={number}
              setValue={setNumber}
              label="تعداد"
              mr="15px"
              defaultValue={number}
              mt={{ base: '10px', md: '0' }}
              w="100%"
            />
          </Flex>
          <Button
            colorScheme="blue"
            mt="20px"
            disabled={
              !newProduct.name ||
              !newProduct.company ||
              !newProduct.off ||
              !newProduct.numberOfProducts ||
              !newProduct.price
            }
            onClick={() => {
              dispatch(editProduct(newProduct))
              onClose()
              toast({
                title: 'ویرایش محصول',
                description: 'محصول با موفقیت ویرایش شد',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom-right',
              })
            }}
          >
            ویرایش
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default EditProductModal

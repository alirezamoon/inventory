import {
  Modal,
  ModalContent,
  ModalOverlay,
  Flex,
  Text,
  Input,
  Button,
  Image,
  Box,
  Tooltip,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProduct,
  editProduct,
  getOneProduct,
} from '../../../store/features/productSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import MyInput from '../../ui/input'

const EditProductModal = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [isOpen])
  const product = useSelector((state) => state.products.product)
  console.log(product)
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
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <Flex as="form" flexDir="column" p="20px">
          <Flex justifyContent="space-between">
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
            <Flex flexDir="column" justifyContent="space-around">
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
              />
            </Flex>
          </Flex>
          <Flex flexDir="row-reverse" mt="20px">
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
            />

            <MyInput
              name="off"
              label="تخفیف"
              value={newProduct.off}
              onChange={(e) =>
                setNewProduct({ ...newProduct, off: e.target.value })
              }
              ltr
              mr="15px"
              hasIcon
              icon="%"
            />

            <MyInput
              name="numberOfProducts"
              label="تعداد"
              value={newProduct.numberOfProducts}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  numberOfProducts: e.target.value,
                })
              }
              ltr
              mr="15px"
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

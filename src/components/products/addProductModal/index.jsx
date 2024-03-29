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
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../store/features/productSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import MyInput from '../../ui/input'
import MyNumberInput from '../../ui/numberInput'

const addProductSchema = Yup.object().shape({
  name: Yup.string().required('نام را وارد کنید'),
  company: Yup.string().required('نام شرکت را وارد کنید'),
  price: Yup.string().required('قیمت محصول را وارد کنید'),
  off: Yup.string().required('تخفیف را وارد کنید'),
})

const AddProductModal = ({ isOpen, onClose }) => {
  const inputRef = useRef()
  const [number, setNumber] = useState(1)
  const [imgURL, setImgURL] = useState('')
  const dispatch = useDispatch()
  const { v4: uuidv4 } = require('uuid')
  const toast = useToast()
  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      price: '',
      off: '0',
    },
    onSubmit: (values) => {
      dispatch(
        addProduct({
          name: formik.values.name,
          company: formik.values.company,
          price: formik.values.price,
          off: formik.values.off,
          numberOfProducts: number,
          image: imgURL,
          id: uuidv4(),
        })
      )
      onClose()
      toast({
        title: 'افزودن محصول',
        description: 'محصول با موفقیت اضافه شد',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })
      formik.values.name = ''
      formik.values.company = ''
      formik.values.price = ''
      formik.values.off = '0'
      setImgURL('')
    },
    validationSchema: addProductSchema,
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <Flex
          as="form"
          flexDir="column"
          p="20px"
          onSubmit={(e) => {
            e.preventDefault()
            formik.handleSubmit()
          }}
        >
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
              border={imgURL ? '' : '2px dashed #3182CE'}
              borderRadius="8px"
              cursor="pointer"
              onClick={() => inputRef.current.click()}
              overflow="hidden"
            >
              {imgURL.length == 0 ? (
                <Tooltip label="افزودن عکس">
                  <Text fontSize="48px" color="#3182CE">
                    +
                  </Text>
                </Tooltip>
              ) : (
                <Tooltip label="تغییر عکس">
                  <Image w="150px" h="150px" src={imgURL} objectFit="cover" />
                </Tooltip>
              )}
            </Flex>
            <Input
              type="file"
              d="none"
              ref={inputRef}
              onChange={(event) => {
                setImgURL(URL.createObjectURL(event.target.files[0]))
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
                errorText={formik.errors.name}
                isInvalid={formik.errors.name ? true : false}
                value={formik.values.name}
                onChange={(e) => formik.handleChange(e)}
              />
              <MyInput
                name="company"
                label="نام شرکت"
                errorText={formik.errors.company}
                isInvalid={formik.errors.company ? true : false}
                value={formik.values.company}
                onChange={(e) => formik.handleChange(e)}
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
              errorText={formik.errors.price}
              isInvalid={formik.errors.price ? true : false}
              value={formik.values.price}
              onChange={(e) => formik.handleChange(e)}
              ltr
              hasIcon
              icon="$"
              w="100%"
              mt={{ base: '10px', md: '0' }}
            />

            <MyInput
              name="off"
              label="تخفیف"
              errorText={formik.errors.off}
              isInvalid={formik.errors.off ? true : false}
              value={formik.values.off}
              onChange={(e) => formik.handleChange(e)}
              ltr
              mr="15px"
              hasIcon
              icon="%"
              w="100%"
              mt={{ base: '10px', md: '0' }}
            />
            <MyNumberInput
              value={number}
              setValue={setNumber}
              label="تعداد"
              mr="15px"
              w="100%"
              mt={{ base: '10px', md: '0' }}
            />
          </Flex>
          <Button colorScheme="blue" mt="20px" type="submit">
            افزودن محصول
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default AddProductModal

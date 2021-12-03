import { Flex, Text } from '@chakra-ui/react'

const ProdutctsTableHeader = () => {
  return (
    <Flex
      justifyContent="end"
      flexDir="row-reverse"
      h="50px"
      bgColor="#3182CE"
      alignItems="center"
      color="white"
      borderTopRadius="8px"
    >
      <Text w="50px">ردیف</Text>
      <Text w="150px">نام</Text>
      <Text w="150px">تعداد</Text>
      <Text w="150px">قیمت</Text>
      <Text w="150px">ویرایش</Text>
      <Text w="150px">حذف</Text>
    </Flex>
  )
}

export default ProdutctsTableHeader

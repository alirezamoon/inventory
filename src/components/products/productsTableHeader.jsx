import { Flex, Text } from "@chakra-ui/react"

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
      fontSize={{ base: "12px", sm: "14" }}
    >
      <Text minW={{ base: "30px", md: "50px" }} pr="10px" whiteSpace="nowrap">
        ردیف
      </Text>
      <Text minW="100px" w="150px">
        نام
      </Text>
      <Text minW="50px">تعداد</Text>
      <Text minW="150px">قیمت</Text>
      <Flex flexGrow={1} flexDir="row-reverse" justifyContent="start">
        <Text minW="50px">ویرایش</Text>
        <Text minW="50px">حذف</Text>
        <Text minW="62px" maxW="150px" w="100%">
          جزئیات
        </Text>
      </Flex>
    </Flex>
  )
}

export default ProdutctsTableHeader

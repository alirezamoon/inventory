import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

const MyInput = ({
  label,
  errorText,
  isInvalid,
  placeholder,
  value,
  name,
  onChange,
  ltr,
  hasIcon,
  icon,
  ...props
}) => {
  return (
    <Flex flexDir="column" pos="relative" {...props}>
      <Flex
        borderRadius="60px"
        pos="absolute"
        zIndex="1000"
        top="-8px"
        right="12px"
        bgColor="white"
      >
        <Text
          variant="overline"
          px="5px"
          minW="50px"
          textAlign="center"
          verticalAlign="middle"
          color="#3182CE"
          border="1px solid"
          borderColor="gray.100"
          borderRadius="60px"
          letterSpacing="1.5px"
          fontSize="10px"
        >
          {label}
        </Text>
      </Flex>
      <InputGroup>
        {hasIcon && <InputRightElement>{icon}</InputRightElement>}
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          dir={ltr ? 'ltr' : 'rtl'}
          onChange={onChange}
          type="text"
          isInvalid={isInvalid}
        />
      </InputGroup>
      <Text color="red" fontSize="10px" textAlign="right">
        {errorText}
      </Text>
    </Flex>
  )
}

export default MyInput

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
} from '@chakra-ui/react'

const MyNumberInput = ({
  value,
  setValue,
  label,
  defaultValue,
  max,
  disabled,
  ...props
}) => {
  return (
    <Flex flexDir="column" pos="relative" {...props}>
      <Flex
        borderRadius="60px"
        pos="absolute"
        zIndex="1000"
        top="-8px"
        left="12px"
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
      <NumberInput
        defaultValue={defaultValue ? defaultValue : '1'}
        min={1}
        max={max ? max : 1000}
        value={value}
        onChange={(e) => setValue(e)}
        isDisabled={disabled}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  )
}

export default MyNumberInput

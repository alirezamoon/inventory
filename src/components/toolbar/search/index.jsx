import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useState } from 'react'
import { Search as iconSearch } from 'react-iconly'

const Search = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <InputGroup maxW="300px" w="100%">
      <Input
        borderRadius="10px"
        boxShadow="0px 4px 4px 0px rgba(217, 215, 215, 0.25)"
        bgColor="#F7FAFC"
        dir="rtl"
        placeholder="جست و جو"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        type="text"
        pr="40px"
      />
      <InputRightElement
        children={
          <Icon as={iconSearch} set="light" color="#11142D" userSelect="none" />
        }
      />
    </InputGroup>
  )
}

export default Search

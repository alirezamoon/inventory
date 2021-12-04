import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useState } from 'react'
import { Search as iconSearch } from 'react-iconly'
import { useDispatch } from 'react-redux'
import {
  changeSearchTerm,
  searchedProducts,
} from './../../store/features/productSlice'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  return (
    <InputGroup
      maxW={{ base: '100%', md: '300px' }}
      w="100%"
      mt={{ base: '20px', md: '0' }}
    >
      <Input
        borderRadius="10px"
        boxShadow="0px 4px 4px 0px rgba(217, 215, 215, 0.25)"
        bgColor="#F7FAFC"
        dir="rtl"
        placeholder="جست و جو"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value)
          dispatch(searchedProducts(searchTerm))
          dispatch(changeSearchTerm(event.target.value))
        }}
        type="text"
        pr="40px"
      />
      <InputRightElement
        children={
          <Icon as={iconSearch} set="light" color="#3182CE" userSelect="none" />
        }
      />
    </InputGroup>
  )
}

export default Search

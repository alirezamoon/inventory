import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Flex, Text } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal'
import { useRef, useState } from 'react'
import { Buy, Category } from 'react-iconly'
import { aboutUs, add, home } from '../../constants'
import NavigationItem from './navigationItem'
import Search from './search'

const Toolbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <Flex
      h="80px"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="0 1px 5px #3182CE"
      zIndex="10"
    >
      <Flex display={{ base: 'none', md: 'flex' }}>
        <Button bgColor="#F7FAFC" ml="20px">
          <Icon as={Buy} set="curved" fontSize="24px" />
        </Button>
      </Flex>
      {/* <Flex
        flexGrow={1}
        ml={{ base: '10px', md: '50px' }}
        justifyContent={{ base: 'center', md: 'start' }}
      >
      </Flex> */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
        alignSelf="end"
        justifyContent="end"
        h="100%"
        alignItems="center"
        mr="20px"
        flexDir="row-reverse"
      >
        <NavigationItem text={home} to="/" />
        <NavigationItem text={aboutUs} to="/about" />
      </Flex>
      <Flex
        mx="10px"
        cursor="pointer"
        display={{ base: 'flex', md: 'none' }}
        w="100%"
        justifyContent="end"
      >
        <Icon
          as={Category}
          set="bulk"
          primaryColor="#3182CE"
          fontSize="30px"
          ref={btnRef}
          onClick={onOpen}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex flexDir="column" h="100%">
              <Flex
                // display={{ base: 'none', md: 'flex' }}
                alignSelf="end"
                justifyContent="end"
                h="100px"
                alignItems="center"
                w="100%"
                flexDir="column"
              >
                <NavigationItem text={home} to="/" />
                <NavigationItem text={aboutUs} to="/about" />
              </Flex>
              {/* <Flex w="100%"> */}
              <Button bgColor="#F7FAFC" mt="50px">
                <Icon as={Buy} set="curved" fontSize="24px" />
              </Button>
              {/* </Flex> */}
            </Flex>
            {/* <Input placeholder="Type here..." /> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Toolbar

import { Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate, useParams, useRoutes } from 'react-router'
import { aboutUs, add, home } from '../../../constants'
// import { useHistory } from 'react-router-dom'

const NavigationItem = ({ text, to }) => {
  const location = useLocation()
  const activeItem =
    (location.pathname === '/' && text === home) ||
    (location.pathname === '/about' && text === aboutUs)
  return (
    <Flex
      as={NavLink}
      to={to}
      _hover={{ bgColor: '#F7FAFC' }}
      h="100%"
      alignItems="center"
      w="80px"
      justifyContent="center"
      cursor="pointer"
      borderBottom={activeItem ? '5px solid #3182CE' : '0'}
      // borderTop={activeItem ? '2px solid #3182CE' : '0'}
      // borderLeft={activeItem ? '2px solid #3182CE' : '0'}
      // borderRight={activeItem ? '2px solid #3182CE' : '0'}
      bgColor={activeItem ? '#F7FAFC' : '#fff'}
      pb={activeItem ? '2px' : '0'}
      // borderTopRadius="10px"
      // zIndex="20"
      // boxShadow={activeItem ? '0 30px 0 #F7FAFC' : '0'}
    >
      <Text>{text}</Text>
    </Flex>
  )
}

export default NavigationItem

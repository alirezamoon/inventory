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
      _hover={{
        bgColor: { base: '#3182CE', md: '#F7FAFC' },
        color: { base: '#fff', md: '#000' },
      }}
      h="100%"
      alignItems="center"
      w={{ base: '100%', md: '80px' }}
      justifyContent="center"
      cursor="pointer"
      borderBottom={{ base: '0', md: activeItem ? '5px solid #3182CE' : '0' }}
      // borderTop={activeItem ? '2px solid #3182CE' : '0'}
      // borderLeft={activeItem ? '2px solid #3182CE' : '0'}
      // borderRight={activeItem ? '2px solid #3182CE' : '0'}
      bgColor={{
        base: activeItem ? '#3182CE' : '#fff',
        md: activeItem ? '#F7FAFC' : '#fff',
      }}
      pb={{ base: '0', md: activeItem ? '2px' : '0' }}
      mb={{ base: '5px', md: '0' }}
      color={{ base: activeItem ? '#fff' : '#000', md: '#000' }}
      borderRadius={{ base: '10px', md: '0' }}
      // zIndex="20"
      // boxShadow={activeItem ? '0 30px 0 #F7FAFC' : '0'}
    >
      <Text>{text}</Text>
    </Flex>
  )
}

export default NavigationItem

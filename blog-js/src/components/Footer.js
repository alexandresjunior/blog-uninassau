import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      className='bg-light'
      position={'absolute'}
      left={'0'}
      bottom={'0'}
      right={'0'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        align={{ base: 'center', md: 'center' }}>
        <Text>Copyright &copy; Alexandre de Souza Jr. -{" "}
          {`${new Date().getFullYear()}`}</Text>
      </Container>
    </Box>
  );
}

export default Footer;
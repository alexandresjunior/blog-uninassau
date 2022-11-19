import React from "react";
import Routes from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from "./components/Footer";


const App = () => {
  return (
    <ChakraProvider >
      <Routes/>
      <Footer />
    </ChakraProvider>
  );
};

export default App;

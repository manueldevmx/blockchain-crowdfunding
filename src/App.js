import React from 'react';
import Landing from './views/landing/index';
import { ChakraProvider  } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      
      <Landing/>
    </ChakraProvider>

  );
}

export default App;

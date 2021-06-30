// import React from 'react';
// import './App.css';
import { ChakraProvider, Button } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <Button colorScheme="teal">ボタン</Button>
        <p>あああああああ</p> */}
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

import React from "react";
import theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { PostProvider } from "./providers/PostsProvider"
function App() {
  return (
    <ChakraProvider theme={theme}>
      <PostProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostProvider>
    </ChakraProvider>
  );
}

export default App;

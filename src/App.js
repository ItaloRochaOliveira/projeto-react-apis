import { Router } from './routes/Router';
import styled, {createGlobalStyle} from 'styled-components';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Header } from './Components/Header/Header';
import { theme } from './theme/theme';

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const ContainerGeral = styled.div`
  max-width: 100vw;
  min-height: 100vh;
`

function App() {
  return (
      <ChakraProvider theme={theme} resetCSS>
        <Box maxW={"100vw"} minH={"100vh"}>
          <Router />
        </Box>
      </ChakraProvider>
  );
}

export default App;

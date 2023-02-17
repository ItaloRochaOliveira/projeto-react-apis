import { Router } from './routes/Router';
import styled, {createGlobalStyle} from 'styled-components';

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
    <>
      <GlobalStyled />
      <ContainerGeral>
        <Router />
      </ContainerGeral>
    </>
  );
}

export default App;

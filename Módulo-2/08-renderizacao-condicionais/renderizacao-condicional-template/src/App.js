import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [condicional, setCondicional] = useState(false);
  function mudarTela() {
    setCondicional(!condicional);
  }

  function renderizarTela() {
    return condicional ? <TelaCadastro mudarTela={mudarTela} /> : <TelaLogin mudarTela={mudarTela} />
  }

  return (
    <MainContainer >
      <GlobalStyled />
      {renderizarTela()}
      <TelaLogin />
      <TelaCadastro />
    </MainContainer>
  );
}

export default App;
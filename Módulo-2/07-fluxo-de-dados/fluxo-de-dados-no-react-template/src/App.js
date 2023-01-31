import styled, { createGlobalStyle } from "styled-components";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [imgUrl, setImg] = useState("https://picsum.photos/536/354")
  const [descricao, setDescricao] = useState("Descrição")
  const [title, setTitle] = useState("Random Photo")

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            imgUrl={imgUrl}
            setImg={setImg}
            descricao={descricao}
            setDescricao={setDescricao}
            title={title}
            setTitle={setTitle}
          />
        </aside>
        <TelaDaPostagem
          title={title}
          imgUrl={imgUrl}
          descricao={descricao} />
      </Container>
    </>
  );
}

export default App;

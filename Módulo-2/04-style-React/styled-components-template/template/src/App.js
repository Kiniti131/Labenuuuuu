// import { Garagem } from "./Componentes/Garagem";
import { Garagem } from "./Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle.js";
import React from "react";

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}
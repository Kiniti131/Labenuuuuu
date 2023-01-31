import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react';

export default function App() {
  // const array = ["valor1", "valor2"];
  // const [elemento1, elemento2] = array;
  // console.log(elemento1);
  // console.log(elemento2);
  // console.log(array);

  //declarar o estado
  const [nome, setNome] = useState("Labenu");


  // let nome = "Labenu";
  const mudaNome = () => {
    setNome("Conway");
    console.log(nome)
  }
  console.log(nome);
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} mudaNome={mudaNome} />
    </div>
  )
}

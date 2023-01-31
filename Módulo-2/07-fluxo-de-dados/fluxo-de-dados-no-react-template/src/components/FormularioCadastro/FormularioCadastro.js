
import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({ imgUrl, setImg, descricao, setDescricao, title, setTitle }) => {
  // const [img, setImg] = useState("URL")
  // const [descricao, setDescricao] = useState("Descrição")
  // passei para o APP

  // const handleInput = (event) => {
  //   setImg(event.target.value)
  // }

  // const onChangeDescricao = (event) => {
  //   setDescricao(event.target.value)
  // }
  // function submit() {
  //   if (setImg.endsWith('png') && setDescricao.length >= 10) {

  //   }
  // }
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={imgUrl} onChange={(e) => setImg(e.target.value)} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro
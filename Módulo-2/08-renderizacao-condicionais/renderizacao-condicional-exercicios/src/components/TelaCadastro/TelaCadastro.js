import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  function sendData() {
    if (nome != 0 && email != 0 && senha === senha2) {
      props.mudarTela(3)
    } else {
      props.mudarTela(2)
      alert("preencher os dados corretamente")
    }
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input value={nome} onChange={(e) => setName(e.target.value)} id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input value={email} onChange={(e) => setEmail(e.target.value)} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input value={senha} onChange={(e) => setSenha(e.target.value)} id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input value={senha2} onChange={(e) => setSenha2(e.target.value)} id="descricao" />
        </StyledLabel>
        <SendButton onClick={sendData}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;

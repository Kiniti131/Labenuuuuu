import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
    return (
        <FormContainer>
            <h1>Cadastro </h1>
            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereço:
                    <Input id="endereco" required />
                </StyledLabel>
                <StyledLabel htmlFor="numero">
                    Número:
                    <Input id="numero" type="number" required />
                </StyledLabel>
                <StyledLabel htmlFor="telefone" >
                    Telefone:
                    <Input id="telefone" required />
                </StyledLabel>
                <StyledLabel htmlFor="complemento" r>
                    Complemento:
                    <Input id="complemento" required />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar Endereço</SendButton>
                <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
            </Form>
        </FormContainer>
    );
}

export default TelaCadastroEndereco;
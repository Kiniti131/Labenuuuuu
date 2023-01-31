import { Carro } from "../Componentes/Carro";
import { Botao, Estacionamento, SubContainer, GaragemContainer, Header, Footer } from "./style";
import MyLogo from "./image";


export function Garagem(props) {
    return (
        <GaragemContainer>
            <Header>
                <MyLogo />
                <h1>Garagem da {props.nome}</h1>
            </Header>
            <SubContainer>
                {/* <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao> */}
                <Estacionamento>
                    <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
                    <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"} />
                    <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
                    <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
                </Estacionamento>
            </SubContainer>
            <Footer>Styled-component</Footer>
        </GaragemContainer>
    );
}

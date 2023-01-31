import styled from "styled-components";

export const Botao = styled.button`
border:none;
background-color: orange;
padding: 0.8rem;
font-size:1rem;
color:white;

-webkit-transition:border-radius 5s;
-webkit-transition: padding 1s , backgroud-color 1s;
:hover{
    padding: 20px;  
    border-radius: 15px;
    background-color:black;
}
`

export const GaragemContainer = styled.main`
background: #F5F5F5;
    min-widht:90vw;
    min-height:100vh;
    max-height:auto;
    display:flex;
    flex-direction: column;
    gap:1rem;
    

`

export const Header = styled.header`
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:#FA993C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
h1 {
    flex: 1
font-family: 'Inter';
font-style: normal;
font-weight: 550;
font-size:3.5rem;
line-height: 6rem;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
img{
    width: 100px;
}
`
export const SubContainer = styled.div`
place-items: center;
display:flex;
flex-direction: column;
line-height:1.8rem
min-height:50%;
flex-flow:column
`
export const Estacionamento = styled.section`
border:2px solid black;
border-radius:2.5rem;
display: flex;
align-items: center;
justify-content: center;
  width: 80vw;
  min-height:80vh;
  max-width: auto;
  max-height:auto;
  flex-wrap: wrap;
  flex-direction:row;
  place-items: center;

  gap: 0 1rem;
  justify-content: center;
  background: #ff860e38;
 
li{
    list-style:none
}
.Card{
    border:3px solid black;
    padding:1rem;
    border-radius:1rem;
    display:flex;
    background: #FF9937;
}
// .nomeCarro{
//     background-color:orange;
// }
.imgCarro{
  display:flex
  align-content:center;
  align-item:center;

    z-index:0;
    width:10vw;    
}
// .Carro > * {
//   width: 50%;
// }
.Carro{
        // display: grid;
        // grid-template-columns: repeat(2, 1fr); /* 2 columns, each taking up 1 fraction of the available space */
    flex-wrap:wrap;
    padding:auto;
    height:auto;
    width:25vw;
    display:flex;
    flex-direction:columns;
    background: #FF9937;
    font-family: 'Inter';
font-style: normal;
font-weight: 550;
font-size:1.5rem;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

}
`

export const Footer = styled.footer`
background: #FFC083;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 36px;
justify-content: center;
color: #000000;
// bottom:0;
// width:100%;
// margin: auto auto;
position: relative;
margin-top: 1.45rem;
border-top: 1px solid silver;
z-index: 1;


`
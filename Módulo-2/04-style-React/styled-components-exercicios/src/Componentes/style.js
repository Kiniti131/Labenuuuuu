import styled from "styled-components";

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const Header = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
 
`
export const Main = styled.main`
min-height: 80%;
display: flex;
`

export const Nav = styled.nav`

  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;

.botoes-meunu-vertical {
    list-style-type: none;
  } 
`
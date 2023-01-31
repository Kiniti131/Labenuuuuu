import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: "No",
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "pikachu",
    type: "Electric",
    evolved: "LastEvolution",
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png',
    id: 25
  })


  const [pokemon3, setPokemon3] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: "No",
    weight: 8.5,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png',
    id: 4
  })


  const [pokemon4, setPokemon4] = useState({
    name: "Charmeleon",
    type: "Fire",
    evolved: "FirstEvolution",
    weight: 19,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/250px-0005Charmeleon.png',
    id: 25
  })
  const [pokemon5, setPokemon5] = useState({
    name: "Charizard",
    type: "Fire/Flying",
    evolved: "LastEvolution",
    weight: 19,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/250px-0006Charizard.png',
    id: 6
  })
  // Para fazer seus próximos pokemons, crie novos estados!

  return (<>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        name={pokemon.name}
        type={pokemon.type}
        evolved={pokemon.evolved}
        weight={pokemon.weight}
        color={pokemon.color}
        image={pokemon.image}
        id={pokemon.id}
        setPokemon={setPokemon}
        setPokemon2={pokemon2}
      />

      <PokemonCard
        name={pokemon3.name}
        type={pokemon3.type}
        evolved={pokemon3.evolved}
        weight={pokemon3.weight}
        color={pokemon3.color}
        image={pokemon3.image}
        id={pokemon3.id}
        setPokemon={setPokemon3}
        setPokemon2={pokemon4}
        setPokemon3={pokemon5}
      />

    </FlexContainer>
  </>

  );
}

export default App;

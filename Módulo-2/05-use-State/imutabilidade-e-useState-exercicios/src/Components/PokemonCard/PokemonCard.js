import React from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'



const PokemonCard = ({
  name,
  type,
  weight,
  evolved,
  color,
  image,
  setPokemon,
  setPokemon2,
  setPokemon3
}) => {

  const evoluirPokemon = () => {
    if (evolved === "No") {

      setPokemon(setPokemon2)
    } else if (evolved === "FirstEvolution") {
      setPokemon(setPokemon3)
    } else {
      console.log("nada")
    }

  }

  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard
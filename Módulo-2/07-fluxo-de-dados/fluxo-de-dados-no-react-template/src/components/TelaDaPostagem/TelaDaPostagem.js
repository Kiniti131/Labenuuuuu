import React from 'react'
import { ContainerPostagem, Image, Description } from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <h1>{props.title}</h1>
      <Image src={props.imgUrl} alt='drone view' />
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem
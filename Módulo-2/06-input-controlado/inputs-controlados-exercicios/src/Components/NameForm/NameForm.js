import React from 'react'
import { Form, Input } from '../MainPage/styles'
import MainPage from '../MainPage/MainPage.js'

const NameForm = (props) => {
  return (
    <Form>
      <label>
        Nome:
        <Input type="text" placeholder="Nome" value={props.name} onChange={props.onChangeName} required />
      </label>
      <label>
        Idade:
        <Input type="number" placeholder="Idade" value={props.age} onChange={props.onChangeAge} required />
      </label>
      <label>
        E-mail:
        <Input type="email" placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail} required />
      </label>
      <label>
        Confirmação de e-mail:
        <Input type="email" placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail} required />
      </label>
      <button onClick={props.sendData}>Enviar dados</button>
    </Form>
  )
}

export default NameForm
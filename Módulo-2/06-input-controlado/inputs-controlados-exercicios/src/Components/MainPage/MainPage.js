import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("oi")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const sendData = () => {
    if (age >= 18 &&
      (name.length >= 10 && name.length <= 30) &&
      email.includes("@")) {
      setFormFlow(2)
    } else {
      alert("dasdasd")
    }
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos

  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
        name={name}
        age={age}
        email={email}
        onChangeAge={onChangeAge}
        onChangeEmail={onChangeEmail}
        onChangeName={onChangeName}
        sendData={sendData}
      />
        : <ConfirmationForm />}
    </MainContainer>
  )
}
export default MainPage
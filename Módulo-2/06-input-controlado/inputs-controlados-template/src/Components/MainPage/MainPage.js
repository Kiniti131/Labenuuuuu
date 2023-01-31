import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'


function MainPage() {
  const [name, setName] = useState("Oto");
  const [age, setAge] = useState("20");
  const [email, setEmail] = useState("fulano@gmail.com");
  const [password, setPassword] = useState("321312");

  console.log(name)
  const changeName = (event) => {
    console.log(name)
    setName(event.target.value);
  }

  function changeAge(event) {
    setAge(event.target.value);
    console.log(age)
  }

  function changeEmail(event) {
    setEmail(event.target.value);
    console.log(age)
  }

  function changePassword(event) {
    setPassword(event.target.value);
    console.log(password)
  }
  const [show, setShow] = useState("password")

  function mostrar() {
    if (show === "password") {
      setShow("text")
    } else {
      setShow("password")
    }
  }
  function clearInput() {
    setAge("")
    setName("")
    setPassword("")
    setEmail("")
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={name} onChange={changeName} />
        </label>
        <label>
          Idade:
        </label>
        <Input type="number" min="1" max="100" step="2" value={age} onChange={changeAge} />
        <label>
          E-Mail:
          <Input type="email" value={email} onChange={changeEmail} />
        </label>
        <label>
          Password:
          <Input type={show} value={password} onChange={changePassword} className="Senha" />
          <input type="checkbox" onClick={mostrar} /> Mostrar Senha
        </label>
        <button type="submit" onClick={clearInput}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage

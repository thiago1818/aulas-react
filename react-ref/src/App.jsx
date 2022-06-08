import React, { useState, useEffect, useRef } from "react"

export default function App() {

  const [texto, setTexto] = useState('')
  const total = useRef(1)
  const inputRef = useRef()
  const input2Ref = useRef()
  const input3Ref = useRef()

  useEffect(() => {
    total.current++
  })

  function focus1() {
    inputRef.current.focus()
  }

  function focus2() {
    input2Ref.current.focus()
  }

  function executar() {
    console.log(input3Ref.current.value)

  }

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input ref={inputRef} type="text" value={texto} onChange={evento => { setTexto(evento.target.value) }} />
      <br /> <br />
      <input ref={input2Ref} type="text" />
      <hr />
      <p>O texto é: {texto}</p>
      <hr />
      <p>Total renders: {total.current}</p>
      <hr />
      <button onClick={focus1}>Focus 1 </button>
      <button onClick={focus2}>Focus 2 </button>
      <hr />
      <input ref={input3Ref} type="text" />
      <button onClick={executar}>Executar</button>
    </>
  )
}

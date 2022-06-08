import React, { useState, useEffect } from 'react'

export default function App() {

  const clientes = ['Joao', 'Ana', 'Carlos']
  const produtos = ['Pao', 'Manteiga', 'Leite']
  const vendas = ['1 x Pao (Joao)', '2 x Manteiga (Ana)', '3 x Leite (Carlos)']

  const [info, setInfo] = useState('clientes')

  useEffect(() => {
    console.log('mudou')
  }, [info])

  return (
    <>
      <h1>React Hooke - useEffect</h1>
      <hr />
      <button onClick={() => setInfo('clientes')}>Clientes</button>
      <button onClick={() => setInfo('produtos')}>Produtos</button>
      <button onClick={() => setInfo('vendas')}>Vendas</button>
      <h3>{info}</h3>
    </>
  )
}
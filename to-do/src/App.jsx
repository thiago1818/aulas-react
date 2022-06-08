import React, { useState, useRef } from 'react'

export default function App() {

  // state
  const [listaTarefas, setListaTarefas] = useState(() => { return [] })
  const [tarefa, setTarefa] = useState(() => { return '' })

  // ref
  const idTarefa = useRef(0)
  const inputRef = useRef()

  // funções
  function addTarefa() {
    setListaTarefas(old => { return [...old, { id: idTarefa.current, texto: tarefa }] })
    idTarefa.current = idTarefa.current + 1
    setTarefa('')
    inputRef.current.focus()
  }

  function limparTarefas() {
    setListaTarefas(old => { return [] })
    idTarefa.current = 0
  }

  function delTarefa(id) {
    const tmp = listaTarefas.filter(tarefa => tarefa.id !== id)
    setListaTarefas(tmp)
  }

  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <hr />
      <input ref={inputRef} type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value) }} />
      <hr />
      <div>
        <button onClick={addTarefa}>Adicionar</button>
        <button onClick={limparTarefas}>Limpar</button>
      </div>
      <hr />
      <p>Tarefas: </p>
      {listaTarefas.map((tarefa) => {
        return <p key={tarefa.id}>{tarefa.texto} - <span onClick={() => { delTarefa(tarefa.id) }}>[remover]</span></p>
      })}

    </>
  )
}

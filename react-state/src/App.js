import React, { useState } from "react"

export default function App() {

    const [valor, setValor] = useState(() => {
        return 5000
    })

    function aumentar() {
        setValor(valor_antigo => valor_antigo + 1)
    }

    function diminuir() {
        setValor(valor_antigo => valor_antigo - 1)
    }

    return (
        <>
            <h1>React Hooks - useState</h1>
            <button onClick={aumentar}>Aumentar</button>
            <span> {valor} </span>
            <button onClick={diminuir}>Diminuir</button>
        </>
    )
}
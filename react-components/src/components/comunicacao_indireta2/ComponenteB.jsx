import React from "react"

export default (props) => {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <button onClick={() => {
                props.funcao(Math.random())
            }}>Executar</button>
        </div>
    )
}
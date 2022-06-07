import React from "react"
import clientes from '../dados_cliente/dados_cliente'

export default function (props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {props.valor == true ? <p>Verdadeiro</p> : <p>Falso</p>} {/* Operador Ternário */}
        </div>
    )
}
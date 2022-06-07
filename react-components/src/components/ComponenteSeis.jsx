import React from "react"
import clientes from '../dados_cliente/dados_cliente'

const ComponenteSeis = (props) => {

    function cliente() {
        return clientes.map(cliente => {
            return <li key={cliente.id_cliente}>Nome: {cliente.nome} | E-mail: {cliente.email}</li>
        })
    }
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <ul>
                {cliente()}
            </ul>
        </div>
    )
}
export default ComponenteSeis
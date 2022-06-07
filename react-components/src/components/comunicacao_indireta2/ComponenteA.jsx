import React from "react"

import ComponenteB from "./ComponenteB"

export default (props) => {

    function executar(valor) {
        console.log(valor)
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <ComponenteB titulo='Filho B' funcao={executar}> </ComponenteB>
        </div>
    )
}
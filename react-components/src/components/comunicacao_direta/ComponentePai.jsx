import React from "react"
import ComponenteFilho from "./ComponenteFilho"

function ComponentePai(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo='Componente Filho' cargo='Pai'>
                Thiago
            </ComponenteFilho>

            <ComponenteFilho titulo='Componente Filho' cargo='Mãe'>
                Lúcia
            </ComponenteFilho>

            <ComponenteFilho titulo='Componente Filho' cargo='Filho'>
                Lucas
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai
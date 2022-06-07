import React from "react"
import CondicaoIf from "./CondicaoIf"

export default function ComponenteNove(props) {

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>

            <CondicaoIf condicao={props.valor === 'Thiago'}>
                <p>{props.valor} é o meu nome</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor === 'Lúcia'}>
                <p>{props.valor} é a minha esposa</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor !== 'Thiago' && props.valor !== 'Lúcia'}>
                <p>Não conheço o nome {props.valor}</p>
            </CondicaoIf>


        </div>


    )
}
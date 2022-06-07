import React from "react"
import ComponenteCinco from "./ComponenteCinco"

/* export default (props) =>
    <div className="componente">
        <p>Título: {props.titulo}</p>
    </div> */

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p>Título: {props.titulo}</p>
            <ComponenteCinco texto="propriedade do componente" />
            <ComponenteCinco texto="propriedade do componente" />
            <ComponenteCinco texto="propriedade do componente" />
            <ComponenteCinco texto="propriedade do componente" />
        </div>
    )
}
export default ComponenteQuatro
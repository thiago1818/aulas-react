import React from "react"
import './App.css'

//componentes
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"
import ComponenteQuatro from "./components/ComponenteQuatro"
import ComponenteSeis from "./components/ComponenteSeis"
import ComponenteSete from "./components/ComponenteSete"
import ComponenteOito from "./components/ComponenteOito"
import ComponenteNove from "./components/ComponenteNove"
import ComponentePai from "./components/comunicacao_direta/ComponentePai"
import ComponenteMae from "./components/comunicacao_indireta/ComponenteMae"
import ComponenteA from "./components/comunicacao_indireta2/ComponenteA"
import ComponenteAvoA from "./components/comunicacao_direta2/ComponenteAvoA"

function App() {
    return (
        <>
            <ComponenteUm />

            <ComponenteDois />

            <ComponenteTres titulo='Componente Três' subtitulo='Texto do componente três' />

            <ComponenteQuatro titulo='Componente Quatro' />

            <ComponenteSeis titulo='Componente Seis' />

            <ComponenteSete titulo='Componente Sete' valor={true} />

            <ComponenteOito titulo='Componente Oito' valor={10} />

            <ComponenteNove titulo='Componente Nove' valor='Teste' />

            <ComponentePai titulo='Comunicação Direta'> </ComponentePai>

            <ComponenteMae titulo='Comunicação Indireta'> </ComponenteMae>

            <ComponenteA titulo='Comunicação Indireta 2'></ComponenteA>

            <ComponenteAvoA />

        </>
    )
}

export default App
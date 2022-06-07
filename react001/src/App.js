import React from 'react'
import ReactDOM from 'react-dom'
import Texto from './components/Texto'
import Comment from './components/Comment'

function App() {
    return (
        <>
            <h1>Comentários</h1>
            <Comment title="Comentário 1" autor="Thiago" text="" />
            <Comment title="Comentário 2" autor="Lúcia" />
            <Comment title="Comentário 3" autor="Lucas" />
        </>
    )
}

export default App


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//Nova forma
let root = document.querySelector('#root')
ReactDOM.createRoot(root).render(<App />)

//Antiga forma
/* ReactDOM.render(<App></App>, document.querySelector('#root')) */
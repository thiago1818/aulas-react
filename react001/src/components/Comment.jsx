import React from "react"
import './Comment.css'

function Comment(props) {
    return (
        <>
            <section className="comment">
                <p className="title">{props.title}</p>
                <p className="text">{props.text}</p>
                <p className="autor">Autor: {props.autor}</p>
            </section>
        </>
    )
}
export default Comment
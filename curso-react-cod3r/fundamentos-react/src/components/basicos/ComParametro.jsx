/* eslint-disable import/no-anonymous-default-export */
import React from 'react'


export default function ComParametro(props) {
    const notaint = Math.ceil(props.nota)
    const status = notaint >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p> {props.aluno} tem nota {notaint} e está {status}!
            </p>
        </div>
    )
}
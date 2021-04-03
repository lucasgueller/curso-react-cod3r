import React from "react"
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2> Valor Aleatório </h2>
            <p> Valor Mínimo: {min}</p>
            <p> Valor Máximo: {max}</p>
            <p> Valor Gerado: {aleatorio}</p>
        </div>
    )
}

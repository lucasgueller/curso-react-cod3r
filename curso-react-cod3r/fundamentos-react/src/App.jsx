/* eslint-disable import/no-anonymous-default-export */
import React from "react"

import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = <strong>Olá react!</strong>
export default () =>
    <div id="app">
        <Aleatorio min={1} max={60} />
        <h1>Fundamentos React</h1>
        <ComParametro
            titulo="Segundo componente"
            subtitulo="Muito legal"
            aluno="Pedro"
            nota={5.0} />
        <Primeiro />
        {tag}
    </div>
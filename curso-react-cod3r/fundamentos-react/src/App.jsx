/* eslint-disable import/no-anonymous-default-export */
import React from "react"

import Card from './components/Layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () =>
    <div id="app">
        <h1><strong> Fundamentos React </strong></h1>
        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>
        <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro"
                nota={5.0} />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div >
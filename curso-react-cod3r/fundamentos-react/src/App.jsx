/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import './App.css'

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/Layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () =>
    <div className="App">
        <h1><strong> Fundamentos React </strong></h1>
        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color=" #36454f">
                <Familia sobrenome='Ferreira'>
                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Ana' />
                    <FamiliaMembro nome='Gustavo' />
                </ Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color=" #2ab7ca">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#7bc043">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#ee4035 ">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={5.0} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#fe8a71">
                <Primeiro />
            </Card>
        </div>

    </div >
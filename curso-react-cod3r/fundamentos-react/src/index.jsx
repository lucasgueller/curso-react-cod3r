import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Segundo from './components/basicos/Segundo'

const el = document.getElementById('root')
const tag =  <strong>Olá react!</strong>
ReactDOM.render(
    <div>
         { tag }
         <br />
         <Primeiro />
         <ComParametro 
               titulo="Segundo componente"
               subtitulo="Muito legal" />
          <Segundo 
               profissao="barbeiro" />
    </div>,
    el
  )
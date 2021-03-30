import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'

const el = document.getElementById('root')
const tag =  <strong>Olá react!</strong>
ReactDOM.render(
    <div>
         { tag }
         <br />
         <Primeiro />
    </div>,
    el
  )
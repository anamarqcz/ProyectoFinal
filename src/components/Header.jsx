import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto}) => { //estraer el presupuesto en el header
  //pasar el nuevo presupuesto a presupuesto
    return (
    <header>
        <h1>Planificador de Gastos</h1>

        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        />
    </header>
  )
}

export default Header

// presupuesto={presupuesto}: este valor de esta variable comienza en cero ya que se inicializa en cero
import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, presupuestoValido, setPresupuestoValido }) => { //extraer el presupuesto en el header
  //pasar el nuevo presupuesto a presupuesto
    return (
    <header>
        <h1>Planificador de Gastos</h1>

        {presupuestoValido ? (
          <ControlPresupuesto
            presupuesto={presupuesto}

            />
        ):(

        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
       setPresupuestoValido={setPresupuestoValido}
        />
      
      )}

    </header>
  )
}

export default Header

// presupuesto={presupuesto}: este valor de esta variable comienza en cero ya que se inicializa en cero

/* mostrar el componente de grafica del control del presupuesto si es un presupuesto valido
{presupuestoValido ? (
  <p>Control Presupuesto</p>
):(

<NuevoPresupuesto
presupuesto={presupuesto}
setPresupuesto={setPresupuesto}
setPresupuestoValido={setPresupuestoValido}
/>

)}
*/

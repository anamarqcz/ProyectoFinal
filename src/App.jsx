import { useState } from 'react'
import Header from './components/Header'
import ModalGasto from './components/ModalGasto'
import iconAñadirGasto from './assets/img/nuevo-gasto.svg'



function App() {
 const[presupuesto, setPresupuesto ]=useState(0);
 const [presupuestoValido, setPresupuestoValido ]=useState(false); //esta en false ya que al iniciarse esta en cero y no es valido

 //nuevo state para el modal del nuevo gasto que se agrega
 const [modal, setModal ]=useState(false); //iniciar en falso para que se muestre al dar click
  const handleGastoNuevo=()=>{
  //console.log('click para agregar gasto')
  setModal(true)
 }

 //pasar presupuesto al header
  return (
   <div>
    <Header
    presupuesto={presupuesto}//pasar el state
    setPresupuesto={setPresupuesto}
    presupuestoValido= {presupuestoValido} 
    setPresupuestoValido= {setPresupuestoValido}
    />


{presupuestoValido && (
  <div className="iconoGastoNuevo" >
      <img 
      src={iconAñadirGasto}
      alt="icono nuevo gasto"
      onClick={handleGastoNuevo}
      />
       </div>
       ) }

       {modal && 
       <ModalGasto
       setModal={setModal}
       /> }

    
    
   </div>
  )
}

export default App


/* si es verdadero se ejecuta el codigo
{setPresupuestoValido && (
  <div>
      <img 
      src={iconAñadirGasto}
      alt="icono nuevo gasto"
      />
       </div>
       ) }
       */

       // si se muestra el modal mostrar el componente {modal && <p>dsde modal</p> }
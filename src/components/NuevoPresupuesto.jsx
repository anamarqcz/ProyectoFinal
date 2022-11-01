import {useState} from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [mensaje, setMensaje ]= useState('')
// validar presupuesto
// cuando se de click en submit se ejecutará esta funcion
const handlePresupuesto = (e)=>{
 e.preventDefault();
// console.log('ènviando formulario')
//console.log(Number(presupuesto))
    if (!Number(presupuesto)|| Number (presupuesto) < 0){
        setMensaje('No es un presupuesto valido')
    } else {
        console.log('Si es un presupuesto valido')
    }

}


  return (
    <div className='contenedor-presupuesto contenedor sombra'>

        <h2>Nuevo Presupuesto</h2>

        <form onSubmit={handlePresupuesto} className="bg-indigo-600 text-white uppercase w-full p-3 mt-5 rounded-md
                 hover:bg-indigo-400 cursor-pointer transition-colors">
            <div className='campo'>
                <label>Definir Presupuesto</label>
                <input 
                type='text' 
                className='nuevo-presupuesto'
                placeholder='Añadir Presupuesto'
                value={presupuesto}
                onChange ={(e) =>setPresupuesto(e.target.value)}

                />
            </div>
            <input type="submit" value={'añadir'}/>
            {mensaje && <Mensaje tipo='error' >{mensaje}</Mensaje>}

        </form>
    </div>
  )
}

export default NuevoPresupuesto

/*
{presupuesto, setPresupuesto} proops
para asignar nuevo valor al presupuesto y que cambie la cantidad
value={presupuesto}
onChange ={(e) =>setPresupuesto(e.target.value)}
*/
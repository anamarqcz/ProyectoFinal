import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    //cantidad a pesos
    const cantidadPesos = (cantidad) => {
        return cantidad.toLocaleString ('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }



    return (
        <div className="contenedorPresupuesto contenedor ">
        <div>
        <p>Grafica de control presupuesto</p>
        </div>
        
        <div className="contenidoPresupuesto" >
            <p>
                <span>Presupuesto:</span>{cantidadPesos(presupuesto)}
            </p>

            <p>
                <span>Disponible:</span>{cantidadPesos(0)}
            </p>

            <p>
                <span>Gastado:</span>{cantidadPesos(0)}
            </p>
        </div>

        </div>
    )
}

export default ControlPresupuesto
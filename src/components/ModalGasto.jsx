import BotonCerrarModal from '../img/close-modal.svg'

const ModalGasto = (setModal) => {
    
    const ocultarModal= () =>{
        //console.log('ocultando')
        setModal(false)
    }

    return (
        <div className='cuadroModal'>
       <div className="cerrar-modal">
        <img 
        src={BotonCerrarModal} 
        alt="cerrar modal" 
        onClick={ocultarModal} 
        />
        </div>
        </div>
    )
}

export default ModalGasto
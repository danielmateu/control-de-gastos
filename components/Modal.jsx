import CerrarBtn from '../src/img/cerrar.svg'

export const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() => {
            setModal(false)
            
        },500)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                    
                />
            </div>

            <form action="" className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
            </form>
        </div>
    )
}

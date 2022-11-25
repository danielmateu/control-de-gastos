import { useEffect, useState } from 'react'
import CerrarBtn from '../src/img/cerrar.svg'
import { Mensaje } from './Mensaje'

export const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto, 
    gastoEditar
}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
        }
    }, [])
    


    const ocultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() => {
            setModal(false)
            
        },500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre,cantidad,categoria].includes('')){
            
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('')
            }, 2000);
            return;
        }

        guardarGasto({nombre, cantidad, categoria})
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

            <form 
                onSubmit={handleSubmit}
                action="" 
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
            >
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del gasto' 
                        value={nombre}  
                        onChange = { e => setNombre(e.target.value)}  
                    />
                </div>

                <div className="campo">
                    <label htmlFor="nombre">Cantidad</label>

                    <input 
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del gasto: ej 300' 
                        value={cantidad}
                        onChange = {e => setCantidad(Number(e.target.value))}     
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>

                    <select 
                        name="" 
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="añadir gasto" />

            </form>
        </div>
    )
}

import React from 'react'

export const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form action="" className='formulario'>
                <div className="campo">
                    <label htmlFor="">Definir presupuesto</label>
                    <input
                        type="text"
                        className="nuevo-presupuesto"
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange = { (e) => setPresupuesto(e.target.value)}
                        />
                </div>

                <input type="submit" value='añadir'/>
            </form>
        </div>
    )
}

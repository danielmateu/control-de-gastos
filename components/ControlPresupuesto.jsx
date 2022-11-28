import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({
    presupuesto, 
    setPresupuesto,
    gastos,
    setGastos,
    isValidPresupuesto,
}) => {

    const [gastado, setGastado] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total,gasto) => gasto.cantidad + total, 0 );
        const totalDisponible = presupuesto - totalGastado;

        //Calcular porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        

        setDisponible(totalDisponible);
        setGastado(totalGastado);

        setTimeout(() =>{
            setPorcentaje(nuevoPorcentaje)

        },1000)
    }, [gastos]);


    

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-ES', { 
            style: 'currency', 
            currency: 'EUR'
        });
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar el resupuesto y gastos?')
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            isValidPresupuesto(false)
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                text={`${porcentaje}% Gastado`}
                    value={porcentaje}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                        trailColor: '#f5f5f5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6'
                    })}
                />
            </div>
            <div className="contenido-presupuesto">

                <button 
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0? 'negativo' : ''}`}>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

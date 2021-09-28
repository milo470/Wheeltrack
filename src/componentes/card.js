import React from 'react'
import {useHistory} from "react-router-dom";
import './card.css'
function Card() {

    let history = useHistory();

    return (
        <div id="Titulo" className="card text-center bg-dark">
            <div className="card-body text-light">
                <h4 className="card-title">¿Qué es Wheeltrack?</h4>
                <p  className="card-text">Wheeltrack es un aplicativo aliado con el biciusuario de Bogotá. Aquí encontraras herramientras para tu viaje diario en bicicleta, incluyendo rastreo de tu vehículo, localización de parqueaderos, estadísticas en tiempo real de la ruta que tomaras.</p>
                
                <button onClick={() => {history.push('/registro')}} id="Boton" class="btn btn-outline-secondary text-light ">Ingresar</button>
            </div>
        </div>
    )
}

export default Card

import React from 'react'
import './principal.css'
import { useHistory } from "react-router-dom";
function Biciparqueadero() {
    let history = useHistory();
    return (
        <div class="wrapper">
                
                <div class="uno text-center text-light">
                    <h1>Wheeltrack</h1>
                </div>
                <div class="foto">
                    
                </div>
                <div class="dos text-center align-text-bottom" >
                <button onClick={() => {history.push('/Ruta')}} id="Btn" class="btn btn-light">Rutas</button>
                <button onClick={() => {history.push('/Rastreo')}} id="Btn" class="btn btn-light ">Rastreo</button>
                <button onClick={() => {history.push('/Biciparqueadero')}} id="Btn" class="btn btn-light ">Biciparqueadero</button>
                <button onClick={() => {history.push('/Audiovisual')}} id="Btn" class="btn btn-light ">Audiovisual</button>
                </div>
                <div class="tres text-light">
                <p>Biciparqueadero</p>
                </div>
                <div class="mapa">

                </div>
                <div class="pie">

                </div>
            </div>
    )
}

export default Biciparqueadero

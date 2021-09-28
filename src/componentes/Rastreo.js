import React from 'react'
import './principal.css'
import { useHistory } from "react-router-dom";
import credentials from './credentials';
import Map from "./Map"
const mapURL= `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;
function Rastreo() {
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
                <div class="tres text-center text-light">
                <h1>Rastreo de vehiculo</h1>
                </div>
                <div class="mapa">
                <Map 
                googleMapURL={mapURL}
                containerElement={<div style={{height: '400px'}}/>}
                mapElement={<div style={{height:'400px'}}/>}
                loadingElement={<p>Cargando</p>}
                
                />
                </div>
                <div class="pie">

                </div>
            </div>
    )
}

export default Rastreo

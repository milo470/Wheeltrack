import React from 'react'
import { useHistory } from "react-router-dom";
import './form.css'
function confirmar(){
    return alert("Registro exitoso")
}
function Formulario() {
    let history = useHistory();
    return (
        <div id="Caja" className="card text-center bg-dark">
            <div className="card-body text-light">
                <h4 className="card-title">Inicia Sesion:</h4>
                <form action="">
                    <input id="ICajaS" type="email" placeholder="Usuario"></input>
                    <input id="ICaja" type="password" placeholder="Contraseña"></input>
                </form>
                <button onClick={() => {history.push('/Ruta')}} class="btn btn-outline-secondary text-light ">Ingresar</button>
                <h4 className="card-title" id="IRegistro">¿Eres nuevo? Registrate:</h4>
                <form action="">
                    
                    <input id="ICajaS" type="text" placeholder="Nombre"></input>
                    <input id="ICajaM" type="email" placeholder="Email"></input>
                    <input id="ICajaM" type="number" placeholder="Telefono"></input>
                    <input id="ICajaM" type="text" placeholder="Usuario"></input>
                    <input id="ICajaM" type="password" placeholder="Contraseña"></input>
                </form>
                <button onClick={()=> {confirmar()}}class="btn btn-outline-secondary  text-light ">Registrarse</button>
            </div>
        </div>
    )
}

export default Formulario

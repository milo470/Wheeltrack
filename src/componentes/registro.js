import React from 'react'
import Img from './img'
import Imagen1 from '../imagenes/ImagenRegistro.jpg'
import Formulario from './formulario'
function Registro() {
    return (
        <div className="Home">
        <div className="container d-flex justify-content-center aling-items-center h-100 bg">
            <div className="row">
                <div className="col"><Img url={Imagen1}/></div>
                <div className="col"><Formulario/></div>
            </div>
        </div>
        </div>
    )
}

export default Registro

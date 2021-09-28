import React from 'react'
import Card from './card'
import './card.css'
import Img from './img'
import './HomeCards.css'
import Imagen1 from '../imagenes/imagenhome.jpg'
function HomeCards() {
    return (
        <div className="Home">
        <div className="container d-flex justify-content-center aling-items-center h-100 bg">
            <div className="row">
                <div className="col"><Img url={Imagen1}/></div>
                <div className="col"><Card/></div>
            </div>
        </div>
        </div>
    )
}

export default HomeCards

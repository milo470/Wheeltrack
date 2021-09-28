//npm i bootstrap
//npm i react-router-dom --save

import React from 'react'
import HomeCards from './componentes/HomeCards'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import registro from './componentes/registro'
import Principal from './componentes/Rutas'
import Rastreo from './componentes/Rastreo'
import Biciparqueadero from './componentes/Biciparqueadero'
import Audiovisual from './componentes/Audiovisual'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomeCards}/>
        <Route exact path="/registro" component={registro}/>
        <Route exact path="/Ruta" component={Principal}/>
        <Route exact path="/Rastreo" component={Rastreo}/>
        <Route exact path="/Biciparqueadero" component={Biciparqueadero}/>
        <Route exact path="/Audiovisual" component={Audiovisual}/>
      </Switch>
    </Router>
    
  )
}

export default App

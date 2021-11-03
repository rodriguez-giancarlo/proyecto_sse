import React from 'react'
import { Route } from 'react-router'
import ListaCurso from '../../../pages/curso/ListaCurso'
import VistaCurso from '../../../pages/curso/VistaCurso'
import Estadistica from '../../../pages/estadistica/Estadistica'
import Home from '../../../pages/home/Home'
import Perfil from '../../../pages/perfil/Perfil'
import PagRecurso from '../../../pages/VistaRecurso/PagRecurso'
const Main = () => {
    // localStorage.idpersona = 25
    return (
        <div className="main__contenedor">
            <Route path="/principal/my" exact={true} component={Home}/>
            <Route path="/principal/curso" exact={true} component={ListaCurso}/>
            <Route path="/principal/perfil" exact={true} component={Perfil}/>
            <Route path="/principal/estadistica" exact={true} component={Estadistica}/>

            <Route path="/principal/curso/:idcurso" exact={true} component={VistaCurso}/>   
            <Route path="/principal/curso/:idcurso/:idtema/:idrecurso" exact={true} component={PagRecurso}/>   
        </div>
    )
}

export default Main

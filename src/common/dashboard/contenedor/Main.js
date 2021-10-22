import React from 'react'
import { Route } from 'react-router'
import CardCursoC from '../../../components/curso/CardCursoC'
import CardCursoM from '../../../components/curso/CardCursoM'
import TablaCurso from '../../../components/curso/TablaCurso'
import ListaCurso from '../../../pages/curso/ListaCurso'
import VistaCurso from '../../../pages/curso/VistaCurso'
import Home from '../../../pages/home/Home'
import Login from '../../../pages/login/Login'
const Main = () => {
    localStorage.idpersona=4
    return (
        <div className="main__contenedor">
            <Route path="/my/" exact={true} component={Home}/>
            <Route path="/curso" exact={true} component={ListaCurso}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/my/curso/:idcurso" exact={true} component={VistaCurso}/>                                                            
        </div>
    )
}

export default Main

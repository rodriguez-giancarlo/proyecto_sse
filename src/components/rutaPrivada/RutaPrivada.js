import React from 'react'
import { Redirect, Route } from 'react-router'

const RutaPrivada = ({component:Component,...rest}) => {
    return (
        <Route {...rest}>
            {localStorage.idpersona!=undefined?<Component/>:<Redirect to="/"/>}
        </Route>
    )
}

export default RutaPrivada

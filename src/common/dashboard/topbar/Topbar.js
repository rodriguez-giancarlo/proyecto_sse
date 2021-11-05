import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { FcMenu } from "react-icons/fc";
import { withRouter } from 'react-router';
import {Link, NavLink} from 'react-router-dom';
const estilo = {margin: '0px'}

const Topbar = (props) => {
        let firstName =  localStorage.nombre;    
        let firstFoto =  localStorage.foto; 
        const {history} = props;  
        const cerrarSesion=()=>{
            console.log('cerrar sesion');
            localStorage.removeItem('foto')
            localStorage.removeItem('idpersona')
            localStorage.removeItem('googleId')
            localStorage.removeItem('nombre')
            history.push("/") 
        }
        console.log(localStorage.idpersona);
    return (
        
        <div className="topbar__contenedor">
            <h2>
                <label htmlFor="nav-toggle" className="fcMenu" id="topbarmenu">
                    <span><FcMenu/></span>
                </label>
                {/* SSE  */}
            </h2>
            
            <Dropdown>
            <Dropdown.Toggle variant="link" bsPrefix>
            <div className="topbar__user-wrapper">
                <img src={firstFoto} width="40px" height="40px" alt=""/>
                <div>
                    <h4 style={estilo}>{firstName}</h4>
                    <small>Usuario</small>
                </div>
            </div>  
            </Dropdown.Toggle>
            <Dropdown.Menu  className="center shadow-card">
                <Dropdown.Item>
                    <Link to="/principal/perfil" exact >Editar Perfil</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={cerrarSesion}>
                    Cerrar sesión
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default withRouter(Topbar)

import React from 'react'
import { FcPackage,FcIdea,FcStatistics,FcPortraitMode } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { FcMenu } from "react-icons/fc";
const Sidebar = () => {
    return (
        <div className="sidebar__contenedor">
            <div className="sidebar__contenedor-brand">
                <h2>
                <span>
                <label htmlFor="nav-toggle" className="fcMenu" id="sidebar__contenedormenu">
                    <FcMenu/>
                </label>
                </span>
                <span>Dashboard</span>
                </h2>
            </div>
            <div className="sidebar__contenedor-menu">
                <ul>
                    <li>
                        <NavLink to="/my" activeClassName="active">
                        <span><FcPackage/></span>
                        <span>Inicio</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" exact activeClassName="active">
                        <span><FcPortraitMode/></span>
                        <span>Perfil</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/curso"  exact activeClassName="active">
                            <span><FcPackage/></span>
                            <span>Mis Cursos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/principal/3" exact activeClassName="active">
                            <span><FcStatistics/></span>
                            <span>Estadisticas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/principal/1" exact activeClassName="active">
                            <span><FcIdea/></span>
                            <span>ayuda</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/principal/4" exact activeClassName="active">
                            <span><FcStatistics /></span> 
                            <span>Estadística de cursos</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

import React from 'react'
import { FcMenu } from "react-icons/fc";
import Avatar from '../../img/Avatar.png'
const Topbar = () => {
    return (
        
        <div className="topbar__contenedor">
            <h2>
                <label htmlFor="nav-toggle" className="fcMenu" id="topbarmenu">
                    <span><FcMenu/></span>
                </label>
                 SSE 
            </h2>
            <div className="topbar__user-wrapper">
                <img src={Avatar} width="40px" height="40px" alt=""/>
                <div>
                    <h4>Giancarlo Rodriguez</h4>
                    <small>Profesor</small>
                </div>
            </div>
        </div>
    )
}

export default Topbar

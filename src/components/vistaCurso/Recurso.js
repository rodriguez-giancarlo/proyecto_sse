import React from 'react'
import { Nav } from 'react-bootstrap';
import { MdOutlineAdjust } from "react-icons/md";
import { Link } from 'react-router-dom';

const Recurso = (props) => {
    return (
        ///principal/curso/:idcurso/:recurso
            <div className="seccion-recurso">
                <Link to={`${props.idCurso}/${props.idTema}/${props.idRecurso}`} exact={`exact`} >
                    Recurso: {props.nombre}
                </Link>
            </div>
    )
}

export default Recurso

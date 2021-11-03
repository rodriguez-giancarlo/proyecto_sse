import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Ruta = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb>
                <Breadcrumb.Item ><Link to="/principal/my">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item ><Link to="/principal/curso">Curso</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>{props.nombreCurso.current}</Breadcrumb.Item>
            </Breadcrumb>
        </React.Fragment>
    )
}

export default Ruta

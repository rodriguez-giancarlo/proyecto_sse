import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaEllipsisH } from "react-icons/fa";

const BtnTemaRecurso = (props) => {
    const{toggleTema}=props
    return (
        <Dropdown>
            <Dropdown.Toggle variant="link" bsPrefix>
            <FaEllipsisH/>  
            </Dropdown.Toggle>
            <Dropdown.Menu  className="center shadow-card">
                <Dropdown.Item onClick={toggleTema}>
                    Editar Tema
                </Dropdown.Item>
                <Dropdown.Item>
                    Crear Recurso
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default BtnTemaRecurso

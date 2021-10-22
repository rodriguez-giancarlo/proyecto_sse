import React from 'react'
import { Card, Form, Nav } from 'react-bootstrap'
import {FaTrashAlt,FaEdit} from "react-icons/fa";
import { Link } from 'react-router-dom';

const CardCursoC = (props) => {
    return (
        <Card className="text-center shadow-card h-100" key={props.idCurso}>
            <Card.Body>
                <Card.Title >
                    Curso {props.idCurso}: {props.nombre}
                </Card.Title>
                <Form>
                    <Form.Check 
                    type="switch"
                    id={"custom-switch"+props.idCurso}
                    label="publicar"
                    />
                </Form>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Title>
                    Clave:
                </Card.Title>
                <Card.Text>
                    {props.clave}
                </Card.Text>
                <Nav.Link>
                    <FaEdit className="editar"/> 
                    <FaTrashAlt className="eliminar"/>
                </Nav.Link>
            </Card.Body>
            <Card.Footer>
            <Link to={`${props.url}${props.idCurso}`} exact={`exact`}>
                ir al curso
            </Link>
            </Card.Footer>
        </Card>
    )
}

export default CardCursoC

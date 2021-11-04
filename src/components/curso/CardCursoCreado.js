import React, { useState } from 'react'
import { Button, Card, Form, Nav } from 'react-bootstrap'
import {FaTrashAlt,FaEdit} from "react-icons/fa";
import { Link } from 'react-router-dom';
import FormEditarCurso from '../../components/curso/FormEditarCurso';

const CardCursoCreado = ({curso,toggleEditarCurso,toggleEliminarCurso,url}) => {
    return (
        <Card className="text-center shadow-card h-100" key={curso.idCurso}>
            <Card.Body>
            <Form>
                    <Form.Check 
                    type="switch"
                    id={"custom-switch"+curso.idCurso}
                    label="Publicar"
                    />
                </Form>
                <Card.Title >{curso.nombre}</Card.Title>                
                <Card.Text>{curso.descripcion}</Card.Text>
                <Card.Title>Código de Curso</Card.Title>
                <Card.Text>{curso.clave}</Card.Text>
                <Nav.Link>
                    <Button variant="link" onClick={toggleEditarCurso}><FaEdit className="editar"/></Button>
                    {/* <FaEdit className="editar"/>  */}
                    <Button variant="link" onClick={toggleEliminarCurso}><FaTrashAlt className="eliminar"/></Button>
                </Nav.Link>
            </Card.Body>
            <Card.Footer>
            <Link to={`${url}${curso.idCurso}`} exact={`exact`}>
                Ir al curso
            </Link>
            </Card.Footer>
        </Card>
    )
}

export default CardCursoCreado

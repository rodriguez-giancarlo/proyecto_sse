import React from 'react'
import {Modal, Form, Button } from 'react-bootstrap'
import './estiloscurso.css'

const FormEliminarCurso = (props) => {
    const {className,curso,onClick} = props;
    return (
        <React.Fragment>
        <Modal show={props.modalEliminarCurso} onHide={props.toggleEliminarCurso} className={className}  centered 
        >
            <Modal.Header closeButton>Eliminar Curso </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Curso</Form.Label>
                            <Form.Control 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Curso"
                                    autoComplete='off'
                                    defaultValue={curso.nombre}
                                    required
                                    disabled
                            />
                        </Form.Group> 
                    </Form>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" block onClick={onClick}>Eliminar</Button>
            </Modal.Footer>
        </Modal> 
        </React.Fragment>
    )
}

export default FormEliminarCurso

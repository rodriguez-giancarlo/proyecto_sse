import React from 'react'
import {Modal, Form, Button } from 'react-bootstrap'
import './estiloscurso.css'

const FormEditarCurso = (props) => {
    const {className,curso,onChange,onClick,validated} = props;
    return (
        <React.Fragment>
        <Modal show={props.modalEditarCurso} onHide={props.toggleEditarCurso} className={className}  centered 
            // onExiting={()=>{props.setValidated(false) 
            //     // console.log('saliendo'); 
            //     curso.nombre=''
            //     curso.descripcion=''}} 
        >
            <Modal.Header closeButton>Editar Curso </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated}>
                        <Form.Group>
                            <Form.Label>Curso</Form.Label>
                            <Form.Control 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Curso"
                                    autoComplete='off'
                                    defaultValue={curso.nombre}
                                    onChange={onChange}
                                    required
                            />
                            <Form.Control.Feedback type="invalid">
                                    El campo nombre está vacío.
                            </Form.Control.Feedback>            
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control 
                                    type="textarea" 
                                    name="descripcion" 
                                    placeholder="Descripcion"
                                    autoComplete='off'
                                    defaultValue={curso.descripcion}
                                    onChange={onChange}
                                    required
                            />
                            <Form.Control.Feedback type="invalid">
                                    El campo descripción está vacío.
                                </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            <Modal.Footer>
                <Button className="celeste" block onClick={onClick}>Actualizar</Button>
            </Modal.Footer>
        </Modal> 
        </React.Fragment>
    )
}

export default FormEditarCurso

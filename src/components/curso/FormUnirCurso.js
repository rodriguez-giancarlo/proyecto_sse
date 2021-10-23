import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const FormUnirCurso = (props) => {
    const {modalUnir,toggleUnir,onChange,onClick,validated,claveVerificacion,error} = props;
    return (
        <React.Fragment>
            <Modal show={modalUnir} onHide={toggleUnir} centered  
            onExiting={()=>{props.setValidated(false) 
                console.log('saliendo'); 
                claveVerificacion.codigo=''}}>
                <Modal.Header closeButton>Unirse a un Curso nuevo</Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated}>
                            <Form.Group>
                                <Form.Label >Código de Curso</Form.Label>
                                <Form.Control
                                    isInvalid={error!=''}
                                    type="text" 
                                    name="codigo" 
                                    placeholder="Código de Curso" 
                                    autoComplete='off'
                                    onChange={onChange}
                                    required
                                />            
                                <Form.Control.Feedback type="invalid">
                                   {error}
                                </Form.Control.Feedback> 
                            </Form.Group> 
                        </Form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button block className="celeste" onClick={onClick}>Unirse</Button>        
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default FormUnirCurso

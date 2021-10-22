import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const FormCrearTema = (props) => {
    const {modalTema,toggleTema,onChange,crearTema}=props
    return (
        <>
            <Modal show={modalTema} onHide={toggleTema} centered>
                <Modal.Header closeButton className="text-center">
                    Crear Tema
                </Modal.Header>
                <Modal.Body>                    
                   <Form>
                        <Form.Group>
                        <Form.Label>Nombre del tema</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name='nombre'
                                    placeholder="tema" 
                                    autoComplete="off"
                                    onChange={onChange}
                                />
                        </Form.Group>
                    </Form> 
                </Modal.Body>
                <Modal.Footer>
                    <Button block className="celeste" onClick={crearTema} >
                        Crear Tema
                    </Button>   
                </Modal.Footer>
            </Modal>   
        </>
    )   
}

export default FormCrearTema

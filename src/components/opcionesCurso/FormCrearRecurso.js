import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const FormCrearRecurso = ({
    modalRecurso, 
    toggleRecurso, 
    onChange,
    onClick}) => {
    return (
        <>
            <Modal show={modalRecurso} onHide={toggleRecurso} centered>
                <Modal.Header closeButton className="text-center">
                    Crear Recurso
                </Modal.Header>
                <Modal.Body>                    
                <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='nombre'
                                placeholder="Nombre" 
                                autoComplete="off"
                                onChange={onChange}
                            />
                        </Form.Group>                                                
                        <Form.Group>   
                        <Form.Label>Fecha</Form.Label>
                            <Form.Control 
                                type="date" 
                                name='fecha'
                                autoComplete="off"
                                onChange={onChange}
                            />
                        </Form.Group>                        
                        <Form.Group style={{display: "flex",justifyContent:"space-around"}} >
                        <Form.Label>Estado</Form.Label>
                            <Form.Check 
                                disabled
                                label='Habilitado'
                                name="vigencia"
                                value="2"
                                type='radio'
                                id='activo'
                                checked={true}
                                onChange={onChange}
                            />
                            <Form.Check 
                                disabled
                                label='Inhabilitado'
                                name="vigencia"
                                value="1"
                                type='radio'
                                id='inactivo'                               
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile">                                    
                            <Form.Label>Seleccione un archivo</Form.Label> 
                            <div>
                                <Form.Control 
                                type="file" 
                                name="file"
                                onChange={onChange}
                                />      
                            </div>   
                        </Form.Group>
                        <Button  block className="celeste" onClick={onClick}> 
                            Crear Recurso
                        </Button>                        
                    </Form> 
                </Modal.Body>
                <Modal.Footer>                     
                </Modal.Footer>
            </Modal>   
        </>
    )
}

export default FormCrearRecurso

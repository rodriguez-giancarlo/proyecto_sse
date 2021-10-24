import React from 'react';
//import { Form, FormGroup, Label, Input,Button,Row,Col} from 'reactstrap';
import {Form, Button, Col, Row} from 'react-bootstrap';

const FormDatUsuario = ({
        fecha,
        usuario,
        onClick,
        onChange,
    }) => { 
    return (
    <div className="container">
        <Form>
            <Form.Group>
                <Form.Label>Nombres</Form.Label>
                <Form.Control 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre"  
                    autoComplete="off"
                    value= {usuario.nombre}
                    onchange={onChange}
                />            
            </Form.Group>                
            <Form.Group>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control 
                    type="text" 
                    name="nombre" 
                    id="input-nombre-apellidos" 
                    placeholder="Apellidos" 
                    autoComplete="off"
                    value={usuario.apellido}
                    onChange={onChange}    
                    />            
            </Form.Group>
            <Form.Group>
                <Form.Label>Sexo</Form.Label>
                    <div style={{display: "flex",justifyContent: "space-around"}}>
                    <Col sm={10}>
                    <Form.Check
                        type="radio"
                        label="Femenino"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="Masculino"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                    </Col>                                            
                    </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control 
                    type="date" 
                    name="fechanacimiento" 
                    id="input-fecha-nacimiento"
                    onChange={onChange}    
                    value={fecha}
                />            
            </Form.Group>
            <Form.Group>
                <Form.Label>DNI</Form.Label>
                <Form.Control 
                    type="number" 
                    name="input-dni" 
                    id="input-dni" 
                    autoComplete="off"
                    onChange={onChange}    
                    value={usuario.dni}
                    />            
            </Form.Group>
                <Row className="mt-3">
                    <Col style={{textAlign:"end"}}>
                        <Button 
                            to='/principal'  
                            className="celeste"  
                            style={{ marginRight:"10px" }}
                            onClick={onClick}
                        >
                            Guardar
                        </Button>                                                             
                    </Col>
                </Row>
        </Form>                
    </div>
    );
};

export default FormDatUsuario;

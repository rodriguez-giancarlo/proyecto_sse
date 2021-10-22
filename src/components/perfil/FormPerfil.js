import React from 'react';
import { Form, FormGroup, Label, Input, CustomInput,Button,Row,Col} from 'reactstrap';

const FormDatUsuario = ({
        usuario,
        onClick,
        onChange
    }) => { 
    return (
    <div className="container">
        <Form>
            <FormGroup>
                <Label>Nombres</Label>
                <Input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre"  
                    autoComplete="off"
                    value= {usuario.nombre}
                    onchange={onchange}
                />            
            </FormGroup>                
            <FormGroup>
                <Label for="input-nombre-apellidos" >Apellidos</Label>
                <Input 
                    type="text" 
                    name="nombre" 
                    id="input-nombre-apellidos" 
                    placeholder="Apellidos" 
                    autoComplete="off"
                    value={usuario.apellido}
                    onChange={onChange}    
                    />            
            </FormGroup>
            <FormGroup>
                <Label for="input-nombre-sexo" >Sexo</Label>
                    <div style={{display: "flex",justifyContent: "space-around"}}>
                        <CustomInput 
                            type="radio" 
                            id="input-sexo-femenino" 
                            name="femenino" 
                            label="Femenino" 
                        />
                        <CustomInput 
                            type="radio" 
                            id="exampleCustomRadio2" 
                            name="customRadio" 
                            label="Masculino" 
                        />
                    </div>
            </FormGroup>
            <FormGroup>
                <Label for="input-fecha-nacimiento" >Fecha de Nacimiento</Label>
                <Input 
                    type="date" 
                    name="fechanacimiento" 
                    id="input-fecha-nacimiento"
                    onChange={onChange}    
                    value={usuario.fechaNacimiento}
                />            
            </FormGroup>
            <FormGroup>
                <Label for="input-dni" >DNI</Label>
                <Input 
                    type="number" 
                    name="input-dni" 
                    id="input-dni" 
                    autoComplete="off"
                    onChange={onChange}    
                    value={usuario.dni}
                    />            
            </FormGroup>
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

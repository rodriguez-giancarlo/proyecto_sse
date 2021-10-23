import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import FormCrearUnidad from '../../components/opcionesCurso/FormCrearUnidad';
 
const CrearUnidad = (props) => {
    const [modalUnidad, setModalUnidad] = useState(false)
    const toggleUnidad = () => setModalUnidad(!modalUnidad);  
    //crear unidad
    const [ Unidad, setUnidad ] = useState({
        nombre: '',
        descripcion: ''
    });
    const handleChangeUnidad = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setUnidad({
            ...Unidad,
            [nombre]: valor
        });
    }
    const CrearUnidad=()=>{
        console.log('crear unidad');    
    }
    return (
        <div>
            <Button onClick={toggleUnidad} variant='link'>+ Unidad</Button>
            <FormCrearUnidad
            modalUnidad={modalUnidad}
            toggleUnidad={toggleUnidad}
            onChange={handleChangeUnidad}
            onClick={CrearUnidad}
            />
        </div>
    )
}

export default CrearUnidad

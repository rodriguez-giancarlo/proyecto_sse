import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BtnRecurso from '../../components/opcionesCurso/BtnRecurso'
import TablaHistorial from '../../components/opcionesCurso/TablaHistorial';

const OpcionesRecurso = ({idRecurso}) => {
    const [modalhistorial, setModalhistorial] = useState(false)
    const togglehistorial = () => setModalhistorial(!modalhistorial); 
    
    useEffect(() => {
        infoRecurso()
    },[])
    const [listarRecurso, setlistarRecurso] = useState([])
    const infoRecurso=()=>{
        axios.get(`http://localhost:4000/historial/`+idRecurso).then((response)=>{
            setlistarRecurso(response.data);
        })
    }
    return (
        <>
           <BtnRecurso
           togglehistorial={togglehistorial}
           />
           <TablaHistorial
                togglehistorial={togglehistorial}
                modalhistorial={modalhistorial}
                listarRecurso={listarRecurso}

           /> 
        </>
    )
}

export default OpcionesRecurso

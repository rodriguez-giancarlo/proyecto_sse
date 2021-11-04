import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TablaPersona from '../../components/opcionesCurso/TablaPersona'

const HistorialPersona = (props) => {
    useEffect(() => {
        buscarHistorial()
        buscarPersona()
    },[])
    const [infohistorial, setinfohistorial] = useState([])
    const [infoPersona, setinfoPersona] = useState([])
    const buscarHistorial=()=>{
        axios.get(`http://localhost:4000/historial/buscar/`+props.match.params.idrecurso+"/"+props.match.params.idpersona).then((response)=>{
            setinfohistorial(response.data);
        })
    }
    const buscarPersona=()=>{
        axios.get(`http://localhost:4000/persona/edit/`+props.match.params.idpersona).then((response)=>{
            setinfoPersona(response.data);
        })
    }
    return (
        <div>
            <TablaPersona
                infohistorial={infohistorial}
                infoPersona={infoPersona}
            />
        </div>
    )
}

export default HistorialPersona

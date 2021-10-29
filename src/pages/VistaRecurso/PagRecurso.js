import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const PagRecurso = (props) => {
    const [infoRecurso, setinfoRecurso] = useState([])
    useEffect(() => {
        buscarRecurso()
    }, [])
    const buscarRecurso=()=>{
        axios.get(`http://localhost:4000/recurso/infoRecurso/${props.match.params.idrecurso}`).then((response)=>{
            setinfoRecurso(response.data[0]);
        })
    }
    return (
        <div>
            vista Recurso
            <h1>{infoRecurso.nombre}</h1>
            <ReactPlayer url={infoRecurso.archivo} />
        </div>
    )
}

export default PagRecurso

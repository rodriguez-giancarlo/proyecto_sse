import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import BtnTemaRecurso from '../../components/opcionesCurso/BtnTemaRecurso'
import FormEditarTema from '../../components/opcionesCurso/FormEditarTema'

const TemaRecurso = (props) => {
    const [modalTema, setModalTema] = useState(false)
    const toggleTema = () => {setModalTema(!modalTema)}

    const [infoTema, setinfoTema] = useState({
        nombre:props.nombreTema,
        idUnidad:props.idUnidad,
        vigencia:2
    });
    const handleChangeTema = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setinfoTema({
            ...infoTema,
            [nombre]: valor
        });
    }
    useEffect(() => {
        props.ListarTemasCurso()
        console.log(modalTema);
    }, [modalTema]) 

    const EditarTema=()=>{
        axios.put(`http://localhost:4000/tema/actualizar/${props.idTema}`,infoTema)
        props.ListarTemasCurso()
        toggleTema()
        console.log('editar Tema');
    }
   
    return (
        <>
            <BtnTemaRecurso
            toggleTema={toggleTema}
            />
            <FormEditarTema
                toggleTema={toggleTema}
                modalTema={modalTema} 
                infoTema={infoTema} 
                onChange={handleChangeTema} 
                onClick={EditarTema}
            />
        </>
    )
}

export default TemaRecurso

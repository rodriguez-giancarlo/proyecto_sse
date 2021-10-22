import React, { useState } from 'react'
import BtnUnidadTema from '../../components/opcionesCurso/BtnUnidadTema'
import FormCrearTema from '../../components/opcionesCurso/FormCrearTema';
import FormEditarUnidad from '../../components/opcionesCurso/FormEditarUnidad';

const UnidadTema = () => {
    //unidad
    const [modalUnidad, setModalUnidad] = useState(false)
    const toggleUnidad = () => setModalUnidad(!modalUnidad);  
    //tema
    const [modalTema, setModalTema] = useState(false)
    const toggleTema = () => {setModalTema(!modalTema)}
    return (
        <>
            <BtnUnidadTema
            toggleUnidad={toggleUnidad}
            toggleTema={toggleTema}
            />
            <FormEditarUnidad
                toggleUnidad={toggleUnidad}
                modalUnidad={modalUnidad}
            />
            <FormCrearTema
                toggleTema={toggleTema}
                modalTema={modalTema}
            />
        </>
    )
}

export default UnidadTema

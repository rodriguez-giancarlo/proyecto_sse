import React, { useState } from 'react'
import BtnTemaRecurso from '../../components/opcionesCurso/BtnTemaRecurso'
import FormEditarTema from '../../components/opcionesCurso/FormEditarTema'

const TemaRecurso = () => {
    const [modalTema, setModalTema] = useState(false)
    const toggleTema = () => {setModalTema(!modalTema)}

    return (
        <>
            <BtnTemaRecurso
            toggleTema={toggleTema}
            />
            <FormEditarTema
                toggleTema={toggleTema}
                modalTema={modalTema}    
            />
        </>
    )
}

export default TemaRecurso

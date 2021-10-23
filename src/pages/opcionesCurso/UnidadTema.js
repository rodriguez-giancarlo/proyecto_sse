import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BtnUnidadTema from '../../components/opcionesCurso/BtnUnidadTema'
import FormCrearTema from '../../components/opcionesCurso/FormCrearTema';
import FormEditarUnidad from '../../components/opcionesCurso/FormEditarUnidad';

const UnidadTema = (props) => {
   
    //-------------------------------------------------------------------------------------------------------------//
    //                                                 Unidad                                                      //
    //-------------------------------------------------------------------------------------------------------------//

    const [modalUnidad, setModalUnidad] = useState(false)
    const toggleUnidad = () => setModalUnidad(!modalUnidad);  
    // buscar unidad
    const [infoUnidad, setinfoUnidad] = useState({})
    const buscarInfoUnidad=()=>[
        axios.get('http://localhost:4000/unidad/infoUnidad/'+props.idUnidad).then((resp)=>{
            const data=resp.data
            setinfoUnidad(data[0])
        })
    ]
    useEffect(() => {
        buscarInfoUnidad()
    }, [modalUnidad])
    // if(modalUnidad){

    //     buscarInfoUnidad()
    //     console.log(infoUnidad);
    // }
    //crear unidad
    const [ Unidad, setUnidad ] = useState({
        nombre: '',
        descripcion: '',
        idCurso:props.idCurso
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
     //-------------------------------------------------------------------------------------------------------------//
    //                                                 tema                                                        //
    //-------------------------------------------------------------------------------------------------------------//
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

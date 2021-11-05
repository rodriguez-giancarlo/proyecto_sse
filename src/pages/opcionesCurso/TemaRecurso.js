import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import BtnTemaRecurso from '../../components/opcionesCurso/BtnTemaRecurso'
import FormEditarTema from '../../components/opcionesCurso/FormEditarTema'
import FormCrearRecurso from '../../components/opcionesCurso/FormCrearRecurso'


    const TemaRecurso = (props) => {
    //-------------------------------------------------------------------------------------------------------------//
    //                                                   tema
    //-------------------------------------------------------------------------------------------------------------//
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
    }, [modalTema]) 

    const EditarTema=()=>{
        axios.put(`http://localhost:4000/tema/actualizar/${props.idTema}`,infoTema)
        props.ListarTemasCurso()
        toggleTema()
        console.log('editar Tema');
    } 
    //-------------------------------------------------------------------------------------------------------------//
    //                                                   Crear recurso
    //-------------------------------------------------------------------------------------------------------------//
    const [modalRecurso, setModalRecurso] = useState(false)
    const toggleRecurso = () => {setModalRecurso(!modalRecurso)}
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const [recurso, setrecurso] = useState({
        nombre:'',
        fecha:'',
        file: '',
        idTema:props.idTema,
        estado:1,
        tipo:'url',
        vigencia:1
    });

    const handleChangeRecurso = (event) => {        
        const target=event.target;
        const valor = target.value;
        const nombre = target.name;
        if (nombre == 'file'){
            // valor = event.target.files[0].name
            setFile(event.target.files[0]);
            setFileName(event.target.files[0].name);
        }
        setrecurso({
            ...recurso,
            [nombre]: valor,
        });                  
        console.log(recurso)
        console.log(file)
        console.log(fileName)
    }

    // const saveFile = (e) => {
    //     setFile(e.target.files[0]);
    //     setFileName(e.target.files[0].name);
    // };
    const CrearRecurso= async ()=>{
        try {            
            await axios.post('http://localhost:4000/recurso/save',{
                nombre:recurso.nombre,
                fecha:recurso.fecha,
                archivo: recurso.file,
                idTema:props.idTema,
                estado:1,
                tipo:'url',
                vigencia:1              
                })
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");              
        }
    }

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        console.log(file)
        console.log(fileName)
        try {
            const res = await axios.post(
            "http://localhost:4000/upload",
            formData
        );
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    };

    const guardarTodo = () =>{
        CrearRecurso();
        uploadFile()
    }

    return (
        <>
            <BtnTemaRecurso
            toggleTema={toggleTema}
            toggleRecurso={toggleRecurso}
            />
            <FormEditarTema
                toggleTema={toggleTema}
                modalTema={modalTema} 
                infoTema={infoTema} 
                onChange={handleChangeTema} 
                onClick={EditarTema}
            />
            <FormCrearRecurso
                toggleRecurso={toggleRecurso}
                modalRecurso={modalRecurso} 
                onChange={handleChangeRecurso} 
                onClick={guardarTodo}
            />
        </>
    )
}

export default TemaRecurso

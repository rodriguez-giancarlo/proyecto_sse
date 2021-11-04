import  axios  from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Ruta from '../../components/vistaCurso/Ruta'
import Tema from '../../components/vistaCurso/Tema'
import Unidad from '../../components/vistaCurso/Unidad'
import './estilosVU.css'
import CrearUnidad from '../opcionesCurso/CrearUnidad'
import UnidadTema from '../opcionesCurso/UnidadTema'
import TemaRecurso from '../opcionesCurso/TemaRecurso'
import Recurso from '../../components/vistaCurso/Recurso'
import OpcionesRecurso from '../opcionesCurso/OpcionesRecurso'

const VistaCurso = (props) => {
    const idPC = useRef(0)
    const nombreCurso = useRef(0)
    useEffect(() => {
        buscarCurso()
    },[])
    const [infoCurso, setinfoCurso] = useState([])
    const buscarCurso=()=>{
        axios.get(`http://localhost:4000/curso/infocurso/${props.match.params.idcurso}`).then((response)=>{
            setinfoCurso(response.data);
            idPC.current=response.data[0].idpersona
            nombreCurso.current=response.data[0].nombre
        })
    }
   //------------------------------------------------------------------------------
     //unidad-cargarDatos
    const [ListaUnidad, setListaUnidad] = useState([])
    useEffect(() => {
        ListarUnidadCurso()
    }, []);
    //-----------------------------------------------------------------------------
    const ListarUnidadCurso=async()=>{
       await axios.get('http://localhost:4000/unidad/'+props.match.params.idcurso).
            then((response)=>{
                setListaUnidad(response.data);
        })
    };
    let numero=0
    // tema-cargardatos
    const [ListarTemas, setListarTemas] = useState([])
    useEffect(() => {
        ListarTemasCurso()
    }, []);
    const ListarTemasCurso=()=>{
        axios.get('http://localhost:4000/tema/'+props.match.params.idcurso).
        then((respuesta)=>{
            setListarTemas(respuesta.data);
        })
    };

    // recurso-cargardatos
    const [Listarrecursos, setListarrecursos] = useState([])
    useEffect(() => {
        ListarrecursosCurso()
    }, []);
    const ListarrecursosCurso=()=>{
        axios.get('http://localhost:4000/recurso/'+props.match.params.idcurso).
        then((respuesta)=>{
            setListarrecursos(respuesta.data);
        })
    };
    return (
            <>
            <Ruta
                idcurso={props.match.params.idcurso}
                nombreCurso={nombreCurso}
            />
            <div className="container shadow-card p-4">
                <div className="curso">
                    {infoCurso.map((val)=>{
                        return(
                            <>
                                <p className="nombre-curso" key={val.idpersona}>Curso: {val.nombre}</p>
                                {parseInt(localStorage.idpersona)==val.idpersona?
                                    <CrearUnidad 
                                        idCurso={val.idCurso}
                                        ListarUnidadCurso={ListarUnidadCurso}
                                    />
                                :null   
                            }
                            </>
                        )
                    })}
                </div>
                {ListaUnidad.map((valUnidad)=>{
                    return(
                        <>
                            <div className="unidad" >
                            <Unidad
                            nombre={valUnidad.nombre}
                            unidad={++numero}
                            key={valUnidad.idUnidad}
                            />
                            {parseInt(localStorage.idpersona)==idPC.current ?
                            <UnidadTema
                                idUnidad={valUnidad.idUnidad}
                                idCurso={props.match.params.idcurso}
                                ListarUnidadCurso={ListarUnidadCurso}
                                ListarTemasCurso={ListarTemasCurso}
                            />:null}    
                            </div>
                            {ListarTemas.map((valTema)=>{
                                if(valUnidad.idUnidad==valTema.idUnidad){
                                    return(
                                        <>
                                            <div className="tema" >
                                                <Tema
                                                    nombre={valTema.nombre}
                                                    key={valTema.idTema}
                                                />
                                                {parseInt(localStorage.idpersona)==idPC.current ?
                                                <TemaRecurso
                                                    idUnidad={valUnidad.idUnidad}
                                                    nombreTema={valTema.nombre}
                                                    idTema={valTema.idTema}
                                                    ListarTemasCurso={ListarTemasCurso}
                                                />:null}
                                            </div>
                                            {Listarrecursos.map((valRecurso)=>{
                                                if(valTema.idTema==valRecurso.idTema){
                                                    return(
                                                        <>
                                                            <div className="recurso">
                                                                <Recurso
                                                                    key={valRecurso.idRecurso}
                                                                    nombre={valRecurso.nombre}
                                                                    url={valRecurso.archivo}
                                                                    idCurso={infoCurso[0].idCurso}
                                                                    idTema={valRecurso.idTema}
                                                                    idRecurso={valRecurso.idRecurso}
                                                                />
                                                                {parseInt(localStorage.idpersona)==idPC.current ?
                                                                <OpcionesRecurso
                                                                    idRecurso={valRecurso.idRecurso}
                                                                />:null}
                                                            </div>
                                                        </>

                                                    )
                                                }
                                            })}
                                        </>
                                    )
                                }
                            })}
                        </>
                    )
                })}
                
            </div>
            </>
    )
}

export default VistaCurso

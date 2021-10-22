import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Ruta from '../../components/vistaCurso/Ruta'
import Tema from '../../components/vistaCurso/Tema'
import Unidad from '../../components/vistaCurso/Unidad'
import './estilosVU.css'
import CrearUnidad from '../opcionesCurso/CrearUnidad'
import UnidadTema from '../opcionesCurso/UnidadTema'
import TemaRecurso from '../opcionesCurso/TemaRecurso'

const VistaCurso = (props) => {
    useEffect(() => {
        buscarCurso()
    },[])
    const [infoCurso, setinfoCurso] = useState([])
    const buscarCurso=()=>{
        axios.get(`http://localhost:4000/curso/infocurso/${props.match.params.idcurso}`).then((response)=>{
            setinfoCurso(response.data);
        })
    }
     //unidad-cargarDatos
     const [ListaUnidad, setListaUnidad] = useState([])
     useEffect(() => {
         ListarUnidadCurso()
     }, []);
     const ListarUnidadCurso=()=>{
         axios.get('http://localhost:4000/unidad/'+props.match.params.idcurso).
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
        then((response)=>{
            setListarTemas(response.data);

        })
    };
    return (
            <>
            <Ruta
                idcurso={props.match.params.idcurso}
            />
            <div className="container shadow-card p-4">
                <div className="curso">
                    {infoCurso.map((val)=>{
                        return(
                            <>
                                <p className="nombre-curso">Curso :{val.nombre}</p>
                                {localStorage.idpersona===val.idpersona?
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
                            <div className="unidad">
                            <Unidad
                            nombre={valUnidad.nombre}
                            unidad={++numero}
                            />
                            <UnidadTema/>
                            </div>
                            {ListarTemas.map((valTema)=>{
                                 if(valUnidad.idUnidad===valTema.idUnidad){
                                    return(
                                       <div className="tema">
                                            <Tema
                                                nombre={valTema.nombre}
                                            />
                                            <TemaRecurso/>
                                       </div>
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

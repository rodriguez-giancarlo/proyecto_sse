import axios  from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { usePageVisibility } from 'react-page-visibility';
import Timer  from 'react-timer-wrapper';
import Timecode from 'react-timecode';

const PagRecurso = (props) => {
    const idPC = useRef(0)
    //-----------------------------------------------------
    const [infoRecurso, setinfoRecurso] = useState([])
    useEffect(() => {
        buscarRecurso()
        
    }, [])
    useEffect(() => {
        buscarCurso()
        
    }, [])
    const buscarRecurso= async()=>{
       await axios.get(`http://localhost:4000/recurso/infoRecurso/${props.match.params.idrecurso}`).then((response)=>{
            setinfoRecurso(response.data[0]);
            var archivo = response.data[0].archivo
        })
    }
    const buscarCurso= async()=>{
       const data=await axios.get(`http://localhost:4000/curso/infocurso/${props.match.params.idcurso}`)
       idPC.current=data.data[0].idpersona
    }
    //-----------------------------------------------------
    const idPersona = parseInt(localStorage.idpersona) 
    const idRecurso=props.match.params.idrecurso
    const capturafecha=new Date()
    const mes=capturafecha.getMonth()+1
    const dia=capturafecha.getDate()
    const anio=capturafecha.getFullYear()
    const fecha=anio+"-"+mes+"-"+dia
    //-----------------------------------------------------
    const isVisible = usePageVisibility()
    //----------------tiempo----------------------------
    const captura = useRef(0)
    const capturaTiempo=({time})=>{
        captura.current=time
    }
    useEffect(() => {
        console.log('inicio');
        return () => {
            guarda()  
        }
    }, [])
    const guarda=()=>{
        if(idPersona!==idPC.current){
            try {
                axios.post('http://localhost:4000/historial/save',{
                    fecha:fecha,
                    tiempo:Math.round(captura.current/1000),
                    idPersona:idPersona,
                    idRecurso:idRecurso
                }) 
                console.log("fecha:"+fecha+", Tiempo:"+Math.round(captura.current/1000)+" s,Persona: "+idPersona+", Recurso:"+idRecurso);
                console.log('se guardo el historial');
            } catch (e) {
                console.log(e.message);
                alert("Error al agregar");  
            }
        }else{
            console.log('tu creaste el recurso');
        }
    }
    return (
        <div>  
            tiempo de visualizacion de la pagina
            <Timer 
                active={isVisible} 
                duration={null}
                onTimeUpdate={capturaTiempo}
                style={{display: 'none'}}
            >
                <Timecode/>
            </Timer>
            <h1>{infoRecurso.nombre}</h1>
            <embed  
                width="100%" 
                style={{height:'74vh'}}                
                type="application/pdf"
                src="https://tesis.usat.edu.pe/bitstream/20.500.12423/2237/1/TL_MilianMondragonJorge.pdf"

            ></embed >
            {/* <embed src="https://tesis.usat.edu.pe/bitstream/20.500.12423/2237/1/TL_MilianMondragonJorge.pdf" width="500" height="375" 
            type="application/pdf"></embed> */}

        </div>
    )
}

export default PagRecurso

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import AlumnosXcurso from "../../components/estadistica/AlumnosXcurso";

const Estadistica = () => {
    const [Matriculados, setMatriculados] = useState([])
    const idpersona = parseInt(localStorage.idpersona)
    useEffect(() => {
       buscarMatriculados()
    }, [])
    const buscarMatriculados=()=>{
        axios.get(`http://localhost:4000/historial/matriculadosXcurso/`+idpersona).then((response)=>{
            setMatriculados(response.data);
        })
    }
    // console.log(Matriculados);
    return (
        <>
        <AlumnosXcurso Matriculados={Matriculados}/>
        </>
    )
}

export default Estadistica

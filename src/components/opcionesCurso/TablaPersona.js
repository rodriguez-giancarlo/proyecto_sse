import React from 'react'
import { Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
 
const TablaPersona = ({infohistorial,infoPersona}) => {
    const encabezado = () => {
        return (
            <tr>
                <th>#</th>
                <th>Fecha de Visualización</th>
                <th>Tiempo de Visualización</th>
            </tr>
        );
    }
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;                
        return [year, month, day].join('-');
    }
    const celdas = () => {
        let numero = 0;
        return (
            infohistorial.map((persona) => (
                <tr key={numero}>
                    <td>{++numero}</td>
                    <td>{formatDate(persona.fecha)}</td>
                    <td>{persona.tiempo+ " seg"}</td>
                
                </tr>
            ))
        );
    }
    const info=()=>{
        return(
            infoPersona.map((persona)=>{
                <h1>{persona.nombre+ " "+ persona.apellido}</h1>
            })
        )
    }
    return (
        <React.Fragment>
            {infoPersona.map((persona)=>{
                return(
                    <h4 key={persona.idpersona}>{"Alumno: "+persona.nombre+ " "+ persona.apellido}</h4>
                )
            })}
            <Table responsive striped hover >
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default TablaPersona

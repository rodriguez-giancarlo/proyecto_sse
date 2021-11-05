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
    function secondsToString(seconds) {
        var hour = Math.floor(seconds / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return hour + ':' + minute + ':' + second;
      }
    const celdas = () => {
        let numero = 0;
        return (
            infohistorial.map((persona) => (
                <tr key={numero}>
                    <td>{++numero}</td>
                    <td>{formatDate(persona.fecha)}</td>
                    <td>{secondsToString(persona.tiempo)}</td>
                
                </tr>
            ))
        );
    }
    return (
        <React.Fragment>
            {infoPersona.map((persona)=>{
                return(
                    <h4 key={persona.idpersona}>{"Alumno: "+persona.nombre+ " "+ persona.apellido}</h4>
                )
            })}
            <Table responsive striped hover className="text-center">
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

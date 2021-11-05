import React from 'react'
import { Modal, Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
 
const TablaHistorial = ({togglehistorial,modalhistorial,listarRecurso,idRecurso}) => {
    const encabezado = () => {
        return (
            <tr>
                <th>#</th>
                <th>nombre</th>
                <th>Numero de veces</th>
                <th>tiempo acumulado</th>
                <th></th>
            </tr>
        );
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
            listarRecurso.map((persona) => (
                <tr key={persona.idpersona}>
                    <th><Image src={persona.urlFoto} roundedCircle width="35px" height="35px"/></th>
                    <td>{persona.nombre +" "+persona.apellido}</td>
                    <td>{persona.visto}</td>
                    <td>{secondsToString(persona.TiempoAcumulado)+ "s"}</td>
                    <td>
                        <Link to={"/principal/historial/"+idRecurso+"/" + persona.idpersona}>
                        detalles
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <React.Fragment>
            <Modal show={modalhistorial} onHide={togglehistorial} centered>
                <Modal.Header closeButton>Historial de vistas</Modal.Header>
                <Modal.Body>                                        
                <Table responsive striped hover >
                    <thead className="bg-dark text-light">
                        { encabezado() }
                    </thead>
                    <tbody>
                        { celdas() }
                    </tbody>
                </Table>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default TablaHistorial

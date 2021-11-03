import React from 'react'
import { Modal,Button, Image, ListGroup, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const TablaHistorial = ({togglehistorial,modalhistorial,listarRecurso}) => {
    const encabezado = () => {
        return (
            <tr>
                <th></th>
                <th>nombre</th>
                <th>tiempo</th>
            </tr>
        );
    }
    const celdas = () => {
        let numero = 0;
        return (
            listarRecurso.map((persona) => (
                <tr key={persona.idpersona}>
                    <th><Image src={persona.urlFoto} roundedCircle width="35px" height="35px"/></th>
                    <td>{persona.nombre +" "+persona.apellido}</td>
                    <td>{persona.visto}</td>
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
                        {/* { encabezado() } */}
                    </thead>
                    <tbody>
                        { celdas() }
                    </tbody>
                </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={"/principal/estadistica/"}>ver mas detalles</Link>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default TablaHistorial

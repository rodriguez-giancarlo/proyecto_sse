import React, { useState } from 'react'
import { Button, Card, Form, Nav } from 'react-bootstrap'
import {FaTrashAlt,FaEdit} from "react-icons/fa";
import { Link } from 'react-router-dom';
import CardCursoCreado from '../../components/curso/CardCursoCreado';
import FormEditarCurso from '../../components/curso/FormEditarCurso';
import FormEliminarCurso from '../../components/curso/FormEliminarCurso';

const CardCursoC = ({curso}) => {
    const [modalEditarCurso, setModalEditarCurso] = useState(false);
    const toggleEditarCurso = () => setModalEditarCurso(!modalEditarCurso);

    const [modalEliminarCurso, setModalEliminarCurso] = useState(false);
    const toggleEliminarCurso = () => setModalEliminarCurso(!modalEliminarCurso);
    return (
        <React.Fragment>
        <CardCursoCreado
            curso={curso}
            url={'/principal/curso/'}
            toggleEditarCurso={toggleEditarCurso}
            toggleEliminarCurso={toggleEliminarCurso}
            key={curso.idcurso}
        />
        <FormEditarCurso
            toggleEditarCurso={toggleEditarCurso}
            modalEditarCurso={modalEditarCurso}
            curso={curso}
        />
        <FormEliminarCurso
            toggleEliminarCurso={toggleEliminarCurso}
            modalEliminarCurso={modalEliminarCurso}
            curso={curso}
        />
        </React.Fragment>
    )
}

export default CardCursoC

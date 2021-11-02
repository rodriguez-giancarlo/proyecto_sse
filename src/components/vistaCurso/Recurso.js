import React from 'react'
import { Link } from 'react-router-dom';

const Recurso = ({idCurso,idRecurso,idTema,nombre}) => {
    return (
            <div className="seccion-recurso">
                <Link to={idCurso+"/"+idTema+"/"+idRecurso} exact={`exact`} >
                    Recurso: {nombre}
                </Link>
            </div>
    )
}

export default Recurso

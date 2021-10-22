import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormPerfil from '../../components/perfil/FormPerfil'

const PagDatUsuario = () => {
        const [usuario, setUsuario] = useState({})
        const googleId  = localStorage.googleId
        // const idpersona = localStorage.idpersona
        // console.log(idpersona)
        const buscarUsuario = () => {
            axios.get(`http://localhost:4000/persona/buscarId/${googleId}`).then((resp)=>{                
            const datos = resp.data
                setUsuario(datos[0])  
            })
        }
        
        const guardar = () => {
            console.log(usuario)
        }
        useEffect(() => {
            buscarUsuario()
        }, [])

    return (
        <>
            <FormPerfil
            usuario={usuario}
            onClick={guardar}
            />                
        </>
    )
}

export default PagDatUsuario

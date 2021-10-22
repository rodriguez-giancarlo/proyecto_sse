import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormPerfil from '../../components/perfil/FormPerfil'

const PagDatUsuario = () => {
        const [usuario, setUsuario] = useState({})

        const googleId  = localStorage.googleId

        const buscarUsuario = () => {
            axios.get(`http://localhost:4000/persona/buscarId/${googleId}`).then((resp)=>{                
            const datos = resp.data
                setUsuario(datos[0])   
                console.log()                           
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

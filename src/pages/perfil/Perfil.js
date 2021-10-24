import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormPerfil from '../../components/perfil/FormPerfil'

const PagDatUsuario = () => {
        const [usuario, setUsuario] = useState({}) 
        const [fecha, setFecha] = useState('') 
        const googleId  = localStorage.googleId    
        const buscarUsuario = () => {
            axios.get(`http://localhost:4000/persona/buscarId/${googleId}`).then((resp)=>{                
            const datos = resp.data                        
                setUsuario(datos[0])  
                var fecha = datos[0].fechaNacimiento
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
                const dataFecha = formatDate(fecha);
                setFecha(dataFecha);
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
            fecha={fecha}
            />                
        </>
    )
}

export default PagDatUsuario

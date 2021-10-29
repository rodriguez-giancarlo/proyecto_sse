import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormPerfil from '../../components/perfil/FormPerfil'

const PagDatUsuario = () => {
        const [usuario, setUsuario] = useState({}) 

        const googleId  = localStorage.googleId  
        const idPersona = localStorage.idpersona  

        const buscarUsuario = () => {
            axios.get(`http://localhost:4000/persona/buscarId/${googleId}`).then((resp)=>{                
                const datos = resp.data                                        
                // Cambiar formato de Fecha
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
                
                datos[0].fechaNacimiento = formatDate(fecha);
                setUsuario(datos[0])  
                
            })
        }

        useEffect(() => {
            buscarUsuario()
        }, [])
        
        const handleChangeUsuario = (event) => {
            const target = event.target;
            const valor = target.value;
            const nombre = target.name;
            setUsuario({
                ...usuario,
                [nombre]: valor
            });
        }

        const EditarPerfil=()=>{
            axios.put(`http://localhost:4000/persona/update/${idPersona}`,usuario);
        }   
        
    return (
        <>
            <FormPerfil
            usuario={usuario}
            onChange={handleChangeUsuario}
            onClick={EditarPerfil}            
            />                
        </>
    )
}

export default PagDatUsuario

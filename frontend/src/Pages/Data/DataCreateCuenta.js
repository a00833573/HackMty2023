import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { nuevoEmpleado } from '../../api/auth'

const DataCreateCuenta = () => {
    const[usuario,setUsuario] = useState({
        correo:"",
        contrasena:"",
        idperfil:1
    })

    const handleInput = (e) => {
        e.persist();
        setUsuario({...usuario,[e.target.name]:e.target.value})
    }

    const handlePerfilInput = (e) => {
        setUsuario({...usuario,idperfil:parseInt(e.target.value)});
    }

    const creaCorreoContraseña = async (e) => {
        e.preventDefault();
        try {
            localStorage.setItem("correo", usuario.correo)
            console.log(usuario)
            await nuevoEmpleado(usuario);
            window.location.reload();
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h4> Agrega Usuario
                            {/*<Link to="/nuevousuario" className='btn btn-primary float-end'>Agrega Usuario</Link>*/}
                            <Link to="/data" className='btn float-end' style={{backgroundColor: 'rgb(255, 51, 0)', color: 'white'}}>Regresar</Link>
                        </h4>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label>Correo</label>
                                <input type="text" name="correo" value={usuario.correo} onChange={handleInput} className="form-control"/>
                            </div>
                                    
                            <div className="mb-3">
                                <label>Contraseña</label>
                                <input type="text" name="contrasena" value={usuario.contrasena} onChange={handleInput} className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label>Perfil</label>
                                {/*<input type="number" name="idperfil" value={usuario.idperfil} onChange={handleInput} className="form-control"/>*/}
                                    <select type="number" name="idperfil" value={usuario.idperfil} onChange={handlePerfilInput} className="form-control">
                                        <option value="1">Admin</option>
                                        <option value="2">Trainee</option>
                                    </select>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn" style={{backgroundColor: 'rgb(0, 51, 153)', color: 'white'}} onClick={creaCorreoContraseña}>Agregar Usuario</button>
                            </div>
                        </form>                
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataCreateCuenta
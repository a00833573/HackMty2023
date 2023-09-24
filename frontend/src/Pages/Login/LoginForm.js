import React from "react";
import {useState} from "react";
import {getIdEmpleado, getIdPerfil, onLogin} from '../../api/auth'
import {useDispatch} from 'react-redux'
import {authenticateUser, authenticateAdmin} from '../../redux/slices/auth_slice'

const Login =() => {
    //const cuenta=postUser.username; //reemplazaria a handle

    const [values, setValues] = useState({
      email: '',
      password: '',
    })
    const [error, setError] = useState(false)

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
      e.preventDefault()

      try {
        const response = await onLogin(values)  
        if(response.data.success) {
          dispatch(authenticateUser())
          localStorage.setItem('isAuth', true);
          setError('')
          const correoJSON = {
            "correo": values.email
          }
          let response = await getIdPerfil(correoJSON);
          const perfil = response.data.idPerfil;
          if(perfil === 1){
            dispatch(authenticateAdmin())
            localStorage.setItem('isAdmin', true);
          }

          response = await getIdEmpleado(correoJSON);
          localStorage.setItem('idEmpleado', response.data.idEmpleado)
        }
        else setError(response.data.errors[0].msg)
      } catch (errorResponse) {

      }
    }
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
      <>
        <form onSubmit={(e) => onSubmit(e)}>
         <div className="d-flex justify-content-center">
            <input required type="text" placeholder="usuario"
              value={values.email} name = 'email' onChange={(e) => onChange(e)} />
         </div>

         <div className="d-flex justify-content-center my-1">
            <input required type="password" placeholder="contraseña"
                    value={values.password} name = 'password' onChange={(e) => onChange(e)} />
         </div>

          <div style={{color: 'red', margin: '10px 0'}}>{error}</div>
          <button type="submit" variant="outline-success" className="btn btn-secondary btn-sm button-center">Enter</button>


        </form>      
      </>
    );
}
   
export default Login;
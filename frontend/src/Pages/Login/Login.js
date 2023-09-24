import React from "react";
import LoginForm from "./LoginForm";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h3 className='text-center my-5'> Bienvenido </h3>

      {/*FORMATO*/}
      <div className="container">
        <div className="row">
            {/*Sirve para dividir espacio*/}
            <div className="col"></div>

            <div className="col" style={{ backgroundColor: '#1cc3d9' }}>
              <h6 className='text-center my-3'> Ingresa a tu cuenta </h6>

              {/*LOGIN*/}
              <div className="text-center">
                <LoginForm />
              </div>

              <br />
              <div className="text-center">
                <a href="/recuperar-contrasena" className="forgot-password-link">
                  Recuperar contraseña
                </a>
              </div>
              <br />

            </div>

            {/*Sirve para dividir espacio*/}
            <div className="col"></div>

            <div className="text-center my-3">
              <Link to="/" className="forgot-password-link">
                Regresar
              </Link>
            </div>

        </div>
    </div>

    </>
  );
};

export default Login;
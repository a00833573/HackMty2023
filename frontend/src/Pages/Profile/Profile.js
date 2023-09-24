import React, { useState, useEffect } from 'react';
import './Profile.css';
import foto from '../../Images/logo.png';
import { getAreas, getInfoEmpleado } from '../../api/auth';
import Checkbox from '../../Components/Check box/Checkbox';

const Profile = () => {
  const [infoEmpleado, setInfoEmpleado] = useState({})
  const [areas, setAreas] = useState([])
  const loadProfileInfo =  async () => {
    const idJSON = {
      "idempleado": localStorage.getItem('idEmpleado')
    }
    const {data}  = await getInfoEmpleado(idJSON)
    setInfoEmpleado(data)
  }

  const loadAreas = async () => {
    const {data} = await getAreas(); 
    setAreas(data);
  };

  useEffect(() => {
    loadAreas();
  }, [])
  loadProfileInfo();

  /*
    Datos guardados en infoEmpleado:
     nombre, apellidopeterno, apellidomaterno, pais, genero,
     fechanacimiento, idempleado, idarea
  */

  return (
    <div>

      <div className="container">
        <div className="row">
          {/* SECTION 1 PROFILE OPTIONS */}
          <div className="col-3" style={{ backgroundColor: 'rgb(255, 153, 0)' }}>
            <img 
              src={foto} 
              className='logo-image' 
              alt="Logo"
            />

            <div className="underline mx-auto"></div>

            <img 
              src={infoEmpleado.fotoPerfil} 
              className="card-img-top profile-image" 
              alt="Foto de perfil"
            />
            <br />
            <br />

            <p className="px-2 my-3" style={{ textAlign: 'center', margin: 'auto' }}>{infoEmpleado.nombre + ' ' + infoEmpleado.apellidoPaterno + ' ' + infoEmpleado.apellidoMaterno}</p>
            <br />
            <p className="px-2 my-3" style={{ textAlign: 'center', margin: 'auto' }}>{infoEmpleado.correo}</p>

          </div>

          <div className="col-9">
          <h3 className="px-2 my-1" style={{ textAlign: 'center', margin: 'auto' }}>Perfil</h3>
            {/* SECTION 2 PROFILE INFO */}
            <div className="row px-5">
            <div className="column px-4 my-3 border-custom" style={{ backgroundColor: 'rgb(212, 212, 212)' }}>
                <div className="row my-3">
                  <h5 className="header5 px-3 my-2">Información Personal</h5>
                  
                  <div className="col-4">
                    <img 
                      src={infoEmpleado.fotoPerfil}
                      className="card-img-top profile-image-2" 
                      alt="Foto de perfil 2"
                    />
                  </div>

                  <div className="col-4">
                    <p>Encuadre actual:</p>
                    <p>Fecha inicio:</p>
                    <p>Fecha graduación:</p>
                    <p>Jefe:</p>
                  </div>

                  <div className="col-4">
                    <p>{infoEmpleado.area}</p>
                    <p>{infoEmpleado.fechaInicio}</p>
                    <p>{infoEmpleado.fechaGraduacion !== null ? infoEmpleado.fechaGraduacion : "null"}</p>
                    <p>{infoEmpleado.jefe}</p>
                  </div>

                </div>
              </div>
                
            </div>

            {/* SECTION 3 AREAS DE INTERES */}
            <div className="row px-5">
              <div className="column px-4 my-4 border-custom" style={{ backgroundColor: 'rgb(212, 212, 212)' }}>
                <div className="row my-3">
                  <h5 className="header5 px-3 my-2">Áreas de Interés</h5>
                  {
                    areas.map((area) => {
                      return <Checkbox nombre={area.nombre} idArea = {area.idarea}/>;
                    })
                  }
                </div>
              </div>
            </div>
            
            {/* SECTION 4 RENUMERACIÓN */}
            <div className="row px-5 my-3">
              <div className="column px-4 border-custom" style={{ backgroundColor: 'rgb(212, 212, 212)'}}>
                <div className="row my-3 justify-content-center">
                  <h5 className="header5 px-3 my-2">Renumeración</h5>
                    <div className="col-md-3 col-sm-6 my-2" style={{ backgroundColor: 'white' }}>
                      <br />
                      <p className="">Sueldo correspondiente:</p>
                      <p className="">Encuadre actual:</p>
                    </div>
                    
                    <div className="col-md-2 col-sm-6 my-2" style={{ backgroundColor: 'white' }}>
                      <br />
                      <p className="">{infoEmpleado.sueldo}</p>
                      <p className="">{infoEmpleado.area}</p>
                    </div>

                    <div className="col-1 my-2">
                      <div className="vertical-line"></div>
                    </div>

                    <div className="col-md-3 col-sm-6 my-2" style={{ backgroundColor: 'white' }}>
                      <h6 className="my-1">Fechas importantes</h6>
                      <p className="">Próximo adelanto PTU:</p>
                      <p className="">Fondo de ahorro:</p>
                    </div>

                    <div className="col-md-3 col-sm-6 my-2" style={{ backgroundColor: 'white' }}>
                      <h6 className="my-1" style={{ color: 'white' }}> . </h6>
                      <p className="">{infoEmpleado.PTU}</p>
                      <p className="">{infoEmpleado.fondoAhorro}</p>
                    </div>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
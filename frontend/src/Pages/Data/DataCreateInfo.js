import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIdEmpleado, nuevoEmpleadoInfo, getAreas } from '../../api/auth';
import axios from 'axios';

const DataCreateInfo = () => {
  const navigator = useNavigate();
  const [usuarioInfo, setUsuarioInfo] = useState({
    nombre: "",
    apellidopaterno: "",
    apellidomaterno: "",
    genero: "Masculino",
    fechanacimiento: "",
    pais: "",
    idempleado: "",
    idarea: "",
    fotoperfil: "https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    fechainicio: "",
    fechagraduacion: "",
    idjefe: ""
  });
  const [areas, setAreas] = useState([]);
  const [jefes, setJefes] = useState([]);

  useEffect(() => {
    loadAreas();
    loadJefes();
  }, []);

  const loadAreas = async () => {
    try {
      const {data} = await getAreas();
      setAreas(data);
    } catch (error) {
      console.log(error);
    }
  };
  const loadJefes = async () => {
    try {
      const {data} = await axios.get("http://localhost:4000/api/get/jefes");
      setJefes(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    e.persist();
    setUsuarioInfo({ ...usuarioInfo, [e.target.name]: e.target.value });
  };

  const handleAreaSelection = (e) => {
    const selectedArea = areas.find((area) => area.idArea === parseInt(e.target.value));
    setUsuarioInfo({ ...usuarioInfo, idarea: selectedArea.idArea });
  };
  const handleBossSelection = (e) => {
    setUsuarioInfo({ ...usuarioInfo, idjefe: e.target.value });
  };
  const handleGenderSelection = (e) => {
    setUsuarioInfo({ ...usuarioInfo, genero: e.target.value });
  };

  const creaInfoUsuario = async (e) => {
    e.preventDefault();
    try {
      const {data} = await getIdEmpleado({ correo: localStorage.getItem("correo") });
      const updatedUsuarioInfo = { ...usuarioInfo, idempleado: data.idEmpleado };
      console.log(updatedUsuarioInfo);
      await nuevoEmpleadoInfo(updatedUsuarioInfo);
      navigator("/data");
    } catch (error) {
      console.log(error);
    }
  };

    return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h4> Agrega Informacion Usuario
                            {/*<Link to="/nuevousuario" className='btn float-end'>Agrega Usuario</Link>*/}
                        </h4>
                    </div>

                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label>Nombre</label>
                                <input type="text" name="nombre" value={usuarioInfo.nombre} onChange={handleInput} className="form-control" required/>
                            </div>

                            <div className="mb-3">
                                <label>Apellido Paterno</label>
                                <input type="text" name="apellidopaterno" value={usuarioInfo.apellidopaterno} onChange={handleInput} className="form-control" required/>
                            </div>

                            <div className="mb-3">
                                <label>Apellido Materno</label>
                                <input type="text" name="apellidomaterno" value={usuarioInfo.apellidomaterno} onChange={handleInput} className="form-control" required/>
                            </div>

                            <div className="mb-3">
                                <label>Genero</label>
                                <select type="text" name="genero" value={usuarioInfo.genero} onChange={handleGenderSelection} className="form-control">
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Fecha Nacimiento</label>
                                <input type="date" name="fechanacimiento" value={usuarioInfo.fechanacimiento} onChange={handleInput} className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label>Pais</label>
                                <input type="text" name="pais" value={usuarioInfo.pais} onChange={handleInput} className="form-control" required/>
                            </div>

                            <div className="mb-3">
                                <label>Area</label>
                                <select type="number" name="idarea" value={usuarioInfo.idarea} onChange={handleAreaSelection} className="form-control">
                                        {areas.map((area) => (
                                            <option key={area.idArea} value={area.idArea}>{area.nombre}</option>
                                        ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Fecha Graduacion</label>
                                <input type="date" name="fechagraduacion" value={usuarioInfo.fechagraduacion} onChange={handleInput} className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label>Jefe</label>
                                <select type="number" name="idjefe" value={usuarioInfo.idjefe} onChange={handleBossSelection} className="form-control">
                                        <option value='0'>-</option>
                                        {jefes.map((jefe) => (
                                            <option value={jefe.idempleado}>{jefe.nombre + ' ' + jefe.apellidopaterno + ' ' + jefe.apellidomaterno}</option>
                                        ))}
                                </select>                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn" style={{backgroundColor: 'rgb(0, 51, 153)', color: 'white'}} onClick={creaInfoUsuario}>Agregar Info Usuario</button>
                            </div>
                        </form>
                                
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataCreateInfo
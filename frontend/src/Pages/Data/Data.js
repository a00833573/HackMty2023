import React, { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //sin esto no me funcionaba el dropdown
import { getAreas,getEmpleadosTodos,borrarUsuario } from '../../api/auth';


const Data = () => {

  const[usuarios,setUsuarios]=useState([]);
  const [areas, setAreas] = useState([]);
  const [detallesUsuarios, setDetallesUsuarios] = useState([]);
  
  const loadUsuarios = async () => {
    const { data } = await getEmpleadosTodos();
    setUsuarios(data)
    localStorage.setItem('correo', '');
  }

  const loadAreas = async () => {
    const { data } = await getAreas();
    setAreas(data);
  };

  const borrarUsuarioInfo = (e, idEmpleado) => {
    e.preventDefault();
    borrarUsuario(idEmpleado)
    .then (res => {
      alert(res.data.message);
      window.location.reload();
    })
    .catch (function(error) {
      console.log(error)
    })
  }
  
  const loadDetallesUsuarios = useCallback(() => {
    setDetallesUsuarios(usuarios.map((item,index)=> {
      const areaUsuario = areas.find((area) => area.idArea === item.idarea);
      return (
        <tr key={index}>
            <td>{item.idempleadoinfo}</td>
            <td>{item.nombre}</td>
            <td>{item.apellidopaterno}</td>
            <td>{item.apellidomaterno}</td>
            <td>{areaUsuario.nombre}</td>
            {/*<td>{item.genero}</td>
            <td>{(item.fechanacimiento).split('T')[0]}</td>
      <td>{item.pais}</td>*/}
            <td>
              <Link to={`/data/edit/${item.idempleado}`} className='btn' style={{backgroundColor: 'rgb(0, 180, 81)', color: 'white'}}>Editar</Link>
            </td>
            <td>
              <button type="button" onClick={(e)=>borrarUsuarioInfo(e, item.idempleado)}  className='btn' style={{backgroundColor: 'rgb(255, 51, 0)', color: 'white'}}>Borrar</button>
            </td>
            <td>
              <Link to={`/data/getRotaciones/${item.idempleado}`} className='btn' style={{backgroundColor: 'rgb(1, 104, 138)', color: 'white'}}>Visualizar</Link>
            </td>
          </tr>
        );
      })
    );
  }, [usuarios, areas]);

  useEffect(() => {
    loadAreas();
    loadUsuarios();
    loadDetallesUsuarios();
  }, [loadDetallesUsuarios]);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header'>
              <h4> Lista de usuarios
                {/*<Link to="/data/create/usuario" className='btn btn-primary float-end'>Agrega Usuario</Link>
                <Link to="/data/create/curso" className='btn btn-primary float-end'>Agrega Curso</Link>*/}
                <div className='dropdown mt-3'>
                  <button className='btn dropdown-toggle' type='button' id='triggerId' data-bs-toggle="dropdown" style={{backgroundColor: 'rgb(0, 51, 153)', color: 'white'}}>
                    Agregar
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="triggerId">
                    <li><Link to="/data/create/usuario" className='dropdown-item'>Agrega usuario</Link></li>
                    <li><Link to="/data/create/curso" className='dropdown-item'>Agrega curso</Link></li>
                  </ul>
                </div>
              </h4>
            </div>

            <div className='card-body'>
              <div className='table table-responsive'>
              <table className='table table-stripped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO PATERNO</th>
                    <th>APELLIDO MATERNO</th>
                    <th>AREA </th>
                    {/*<th>GENERO</th>
                    <th>FECHA NAC</th>
              <th>PAIS</th>*/}
                    <th>EDITAR</th>
                    <th>BORRAR</th>
                    <th>VISUALIZAR</th>
                  </tr>
                </thead>
                <tbody>
                  {detallesUsuarios}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
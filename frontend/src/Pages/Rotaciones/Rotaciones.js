import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAreas, getRotaciones, getFeedback } from "../../api/auth";

const Rotaciones = () => {
  const idempleadoinfo = localStorage.getItem('idEmpleado');
  const [rotaciones, setRotaciones] = useState([]);
  const [areas, setAreas] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const loadRotaciones = async () => {
    try {
      //const res = await axios.get(`http://localhost:4000/api/data/getRotaciones/${idempleadoinfo}`);
      const res = await getRotaciones(idempleadoinfo);
      const areasData = await getAreas();
      setAreas(areasData.data);
      setRotaciones(res.data);
      setFeedback(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadRotaciones();
  }, [idempleadoinfo]);

  var detallesRotaciones = rotaciones.map((item, index) => {
    const areaUsuario = areas.find((area) => area.idArea === item.idarea);
    const feedbackUsuario = feedback.find((feedback) => feedback.idrotacion === item.idrotacion);
    return (
      <tr key={index}>
        <td>{areaUsuario.nombre}</td>
        <td>{item.fechainicio.split('T')[0]}</td>
        <td>{item.fechafin === null ? "En curso" : item.fechafin.split('T')[0]}</td>
        <td>{feedbackUsuario.potencial}</td>
        <td>{feedbackUsuario.performance}</td>
      </tr>
    );
  });

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header'>
              <h4>Historial de Rotación
                <Link to="/data" className='btn float-end' style={{backgroundColor: 'rgb(255, 51, 0)', color: 'white'}}>Regresar</Link>
              </h4>
            </div>
            <div className='card-body'>
              <table className='table table-stripped'>
                <thead>
                  <tr>
                    <th>ID AREA</th>
                    <th>FECHA INICIO</th>
                    <th>FECHA FIN</th>
                    <th>POTENCIAL</th>
                    <th>RENDIMIENTO</th>
                  </tr>
                </thead>
                <tbody>
                  {detallesRotaciones}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rotaciones;

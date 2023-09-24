import React, { useState } from 'react';

const Rotaciones = () => {
  const [report, setReport] = useState({
    calle: '',
    hora: '',
    categoria: '',
    descripcion: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reporte enviado:', report);
    // Aquí puedes enviar el reporte a tu servidor o hacer lo que necesites con la información
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ maxWidth: '400px', padding: '20px', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Formulario de Reporte</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="calle">Calle:</label>
            <input type="text" id="calle" name="calle" value={report.calle} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="hora">Hora:</label>
            <input type="text" id="hora" name="hora" value={report.hora} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoría:</label>
            <select id="categoria" name="categoria" value={report.categoria} onChange={handleInputChange} className="form-control">
              <option value="">Selecciona una categoría</option>
              <option value="asaltos">Asalto</option>
              <option value="robos">Robo</option>
              <option value="acoso">Acoso</option>
              <option value="armas">Arma</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" value={report.descripcion} onChange={handleInputChange} className="form-control" />
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-block">Enviar Reporte</button>
        </form>
      </div>
    </div>
  );
};

export default Rotaciones;
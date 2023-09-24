import './Courses.css';
import { useState, useEffect } from 'react';
import { getCursosEmpleado } from '../../api/auth';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    // Crear el mapa en la posición del Tec de Monterrey
    const map = L.map('map').setView([25.651788, -100.289431], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div id="map" style={{ height: '400px' }}></div>
  );
};

const Courses = () => {
  return (
    <div>
      <div className='container my-3'>
        <h3 className='text-center my-5'>Mapa</h3>
      </div>
      
      <div className='container'>
        <Map />
      </div>
    </div>
  );
};

export default Courses;
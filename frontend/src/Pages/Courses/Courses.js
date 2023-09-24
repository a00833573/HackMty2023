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

const openWhatsAppChat = () => {
  const phoneNumber = '+52 1 81 2032 1792'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
  const message = 'Voy a ir a una zona de peligro, quedate atento de mi.'; // Reemplaza con el mensaje que deseas enviar

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
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

      <div>
        <div id="map" style={{ height: '400px' }}></div>
        <button className="btn-custom2 rounded-button" onClick={openWhatsAppChat}>
          Pide ayuda
        </button>
      </div>

    </div>
  );
};

export default Courses;
import React from 'react'
import { useState } from 'react';
import { actualizarCheckboxEnBaseDeDatos } from '../../api/auth';
import './Checkbox.css';



const Checkbox = ({nombre, idArea}) => {

  const [isChecked, setIsChecked] = useState(false); // Estado inicial del checkbox

  

  const handleCheckboxChange = async () => {
    setIsChecked(!isChecked);
    
    const idempleado = localStorage.getItem('idEmpleado');


    // Write to the database when the checkbox is toggled
    try {
      console.log(nombre);
      console.log(idempleado);
      actualizarCheckboxEnBaseDeDatos(nombre, idempleado);
      console.log('Checkbox state saved to the database.');
    } catch (error) {
      console.error('Error writing to the database:', error);
    }
  };
  return (
    <div className='col-md-4 px-3 my-3'>
        <ul className="list-group">
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." id={idArea} checked={isChecked} onChange={handleCheckboxChange}></input>
                <label htmlFor={idArea}>{nombre}</label>
            </li>      
        </ul>
    </div>
  )
}

export default Checkbox
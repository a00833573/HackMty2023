import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { getAreas } from '../api/auth';
import axios from 'axios';

const RotacionForm = ({show, handleClose, idArea, id}) => {
    const [areas, setAreas] = useState([]);
    const [usuarioInfo, setUsuarioInfo] = useState({
        idempleado: id,
        idarea: idArea,
        performance: 0,
        potencial: "",
    });
    const handleAreaSelection = (e) => {
        const selectedArea = areas.find((area) => area.idArea === parseInt(e.target.value));
        setUsuarioInfo({ ...usuarioInfo, idarea: selectedArea.idArea });
      };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarioInfo({ ...usuarioInfo, [name]: value });
    }  

    const handleSubmit = async () => {
        try {
            console.log(usuarioInfo);
            const { data } = await axios.put(`http://localhost:4000/api/data/update/rotacion`, usuarioInfo);
            handleClose();
        } catch (error) {
            console.log(error);
            alert("Error al actualizar las rotaciones");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await getAreas();
                setAreas(data);
            } catch (error) {
                console.log(error);
                alert("Error al cargar las areas");
            }
        };
        fetchData();
    }, []);

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Cambiar Rotacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group pt-2 pb-2">
                    <label>Rotacion</label>
                    <select type="number" name="idarea" value={usuarioInfo.idarea} onChange={handleAreaSelection} className="form-control">
                        {areas.map((area) => (
                            <option value={area.idArea}>{area.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group pt-2 pb-2">
                    <label>Performance</label>
                    <select type = "number" className='form-control' onChange={handleChange} name='performance'>
                        <option value= "">Selecciona una opcion</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group pt-2 pb-2">
                    <label>Potencial</label>
                    <select type = "number" className='form-control' onChange={handleChange} name='potencial'>
                        <option value= "">Selecciona una opcion</option>
                        <option value="MN-">MN-</option>
                        <option value="MN+">MN+</option>
                        <option value="MN">MN</option>
                        <option value="PROM">PROM</option>
                        <option value="AP">AP</option>
                    </select>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn bg-orange text-left" style={{backgroundColor: 'rgb(0, 51, 153)', color: 'white'}} onClick={handleSubmit}>
                Guardar
            </button>
        </Modal.Footer>
    </Modal>
  )
}

export default RotacionForm
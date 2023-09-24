import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { getRemuneracion } from '../api/auth';
import { format } from 'date-fns';
import axios from 'axios';

const RemuneracionForm = ({show, handleClose, id}) => {
    const [usuarioInfo, setUsuarioInfo] = useState({
        sueldo: 0,
        fondoAhorro: "",
        ptu: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUsuarioInfo(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:4000/api/data/get/remuneracion/${id}`);
                const formattedPtu = format(new Date(data[0].ptu), 'yyyy-MM-dd');
                const formattedAhorro = format(new Date(data[0].fondoahorro), 'yyyy-MM-dd');
                
                setUsuarioInfo(prevState => ({
                    ...prevState, 
                    ...data[0], 
                    ptu: formattedPtu,
                    fondoAhorro: formattedAhorro,
                }));
            } catch (error) {
                console.log(error);
                alert("Error al cargar las remuneraciones");
            }
        }
        fetchData();    
    }, [id]);
    
    const handleSubmit = async () => {
        try {
            console.log(usuarioInfo);
            const { data } = await axios.put(`http://localhost:4000/api/data/update/remuneracion`, usuarioInfo);
            handleClose();
        } catch (error) {
            console.log(error);
            alert("Error al actualizar las remuneraciones");
        }
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Cambiar Remuneracion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group pt-2 pb-2">
                    <label>Sueldo</label>
                    <input type="number" name="sueldo" 
                            value={usuarioInfo.sueldo} className="form-control"
                            onChange={handleChange}>
                        
                    </input>
                </div>
                <div className="form-group pt-2 pb-2">
                    <label>Fondo de Ahorro</label>
                    <input value={usuarioInfo.fondoAhorro} type = "date" 
                    className='form-control' name='fondoAhorro'
                    onChange={handleChange}>

                    </input>
                </div>
                <div className="form-group pt-2 pb-2">
                    <label>PTU</label>
                    <input value={usuarioInfo.ptu} name='ptu' 
                            type = "date" className='form-control'
                            onChange={handleChange}>

                    </input>
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

export default RemuneracionForm;
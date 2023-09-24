import React, { useState } from 'react';
import foto from "../../Images/emergencia.jpg";

const EmergencyContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', number: '' });

  const handleInputChange = (event, key) => {
    const { value } = event.target;
    setNewContact(prevContact => ({ ...prevContact, [key]: value }));
  };

  const handleAddContact = () => {
    setContacts(prevContacts => [...prevContacts, newContact]);
    setNewContact({ name: '', number: '' });
  };

  return (
    <div style={{ borderRadius: '15px', padding: '15px', backgroundColor: 'white' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <input
          type="text"
          placeholder="Ingresa nombre"
          value={newContact.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
        <input
          type="text"
          placeholder="Ingresa número"
          value={newContact.number}
          onChange={(e) => handleInputChange(e, 'number')}
        />
        <button onClick={handleAddContact}>Agregar contacto</button>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="row">
      <div className="col-6 px-4 my-3 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#1cc3d9', borderRadius: '15px' }}>
        <div>
          <h1 >Contacto de emergencia</h1>
          <EmergencyContactsTable />
        </div>
      </div>

      <div className="col-6 px-4 my-3" style={{ borderRadius: '15px' }}>
        <img src={foto} className="img-fluid" style={{ borderRadius: '15px' }} />
      </div>
    </div>
  );
};

export default Game;

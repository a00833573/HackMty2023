import React, { useState } from 'react';

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
    <div>
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
          placeholder="Enter name"
          value={newContact.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
        <input
          type="text"
          placeholder="Enter number"
          value={newContact.number}
          onChange={(e) => handleInputChange(e, 'number')}
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>
    </div>
  );
};

const Game = () => {
    return (
      <div className="row">
        <div className="col-6">
          <h1>Emergency Contacts</h1>
          <EmergencyContactsTable />
        </div>
  
        <div className="col-6">
            <h1>HOLA</h1>
        </div>
      </div>
    );
  };
  

export default Game;

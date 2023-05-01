import React, { useState } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';
import './estilo.css';


function AddUser() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  //Regresa a pefil
  const handleProfileClick = () => {
    setRedirectToProfile(true);
  };

  if (redirectToProfile) {
      return <ProfileSettings />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/register/users', {
      user: user,
      password: password
    })
      .then(response => {
        setMessage('Usuario agregado con éxito');
      })
      .catch(error => {
        setMessage('Error al agregar usuario: ' + error.response.data);
      });
  };

  return (
    <div>
      <button onClick={handleProfileClick} className="go-back-button">
        Volver a Perfil
      </button>
      <h1>Agregar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input type="text" value={user} onChange={e => setUser(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Usuario</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default AddUser;

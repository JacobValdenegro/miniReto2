import React, { useState } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';
import './estilo.css';


function UpdatePassword() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  //Regresa a pefil
  const handleProfileClick = () => {
    setRedirectToProfile(true);
  };

  if (redirectToProfile) {
      return <ProfileSettings />;
  }

  const handleUserChange = (event) => setUser(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleNewPasswordChange = (event) => setNewPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { user, password, newPassword };

    axios.put('/actualiza/users', data)
      .then((response) => {
        setMessage('Contraseña actualizada con éxito');
      })
      .catch((error) => {
        setMessage('Error: ' + error.response.data);
      });
  };

  return (
    <div>
      <button onClick={handleProfileClick} className="go-back-button">
        Volver a Perfil
      </button>
      <h1>Actualizar contraseña</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" name="user" value={user} onChange={handleUserChange} />
        </label>
        <br />
        <label>
          Contraseña actual:
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Nueva contraseña:
          <input type="password" name="newPassword" value={newPassword} onChange={handleNewPasswordChange} />
        </label>
        <br />
        <button type="submit">Actualizar contraseña</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default UpdatePassword;

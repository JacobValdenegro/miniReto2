import React, { useState } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';
import './estilo.css';



function Delete() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
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
    axios.delete('/delete/users', { data: { user, password } })
      .then(res => {
        console.log(res.data);
        // Mostrar mensaje de éxito
      })
      .catch(err => {
        console.error(err);
        // Mostrar mensaje de error
      });
  };

  return (
    <div>
      <button onClick={handleProfileClick} className="go-back-button">
        Volver a Perfil
      </button>
      <h1>Eliminar usuario</h1>
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
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
}

export default Delete;
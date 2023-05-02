import React, { useState } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';
import { Container } from 'react-bootstrap';



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
    <div style={{ position: "relative" }}>
      <button onClick={handleProfileClick} className="button" style={{ position: "absolute", top: "10px", right: "10px" }}>
          Volver a Perfil
      </button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Container>
          <div className="box">
            <h1>Actualizar contraseña</h1>
            <form onSubmit={handleSubmit}>
              <label style={{ display: "block", marginBottom: "10px",  padding: "10px" }}>
                Usuario:
                <input style={{ border: "1px solid #ccc", borderRadius: "5px",  padding: "10px", marginLeft: "10px"  }} type="text" name="user" value={user} onChange={handleUserChange} />
              </label>
              <br />
              <label style={{ display: "block", marginBottom: "10px",  padding: "10px" }}>
                Contraseña actual:
                <input style={{ border: "1px solid #ccc", borderRadius: "5px",  padding: "10px", marginLeft: "10px"  }} type="password" name="password" value={password} onChange={handlePasswordChange} />
              </label>
              <br />
              <label style={{ display: "block", marginBottom: "10px",  padding: "10px" }}>
                Nueva contraseña:
                <input style={{ border: "1px solid #ccc", borderRadius: "5px",  padding: "10px", marginLeft: "10px"  }} type="password" name="newPassword" value={newPassword} onChange={handleNewPasswordChange} />
              </label>
              <br />
              <button className='button' type="submit">Actualizar contraseña</button>
            </form>
          </div>
          <p>{message}</p>
        </Container>
      </div>
    </div>
  );
}

export default UpdatePassword;

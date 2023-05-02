import React, { useState } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';
import { Container } from 'react-bootstrap';


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
    <div style={{ position: "relative" }}>
      <button onClick={handleProfileClick} className="button" style={{ position: "absolute", top: "10px", right: "10px" }}>
          Volver a Perfil
      </button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Container>
          <div className="box">
            <h1>Agregar Usuario</h1>
            <form onSubmit={handleSubmit}>
              <label style={{ display: "block", marginBottom: "10px",  padding: "10px" }}>
                User: 
                <input style={{ border: "1px solid #ccc", borderRadius: "5px",  padding: "10px", marginLeft: "10px"  }} type="text" value={user} onChange={e => setUser(e.target.value)} />
              </label>
              <br />
              <label style={{ display: "block", marginBottom: "10px",  padding: "10px", width: "80%" }}>
                Password: 
                <input style={{ border: "1px solid #ccc", borderRadius: "5px",  padding: "10px", marginLeft: "10px" }} type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
              <br />
              <button type="submit" className='button'>Agregar Usuario</button>
            </form>
          </div>
          <div>{message}</div>
        </Container>

      </div>
    </div>
  );
}

export default AddUser;

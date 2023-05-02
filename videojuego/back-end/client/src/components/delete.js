import React, { useState } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';
import { Container } from 'react-bootstrap';


function Delete() {
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
    <div style={{ position: "relative" }}>
      <button onClick={handleProfileClick} className="button" style={{ position: "absolute", top: "10px", right: "10px" }}>
          Volver a Perfil
      </button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Container>
          <div className="box">
            <h1>Eliminar usuario</h1>
            <form onSubmit={handleSubmit}>
              <label style={{ display: "block", marginBottom: "10px",  padding: "10px" }}>
                User:
                <input style={{ border: "1px solid #ccc", borderRadius: "5px",  padding: "10px", marginLeft: "10px"  }} type="text" value={user} onChange={e => setUser(e.target.value)} />
              </label>
              <br />
              <label style={{ display: "block", marginBottom: "10px",  padding: "10px" }}>
                Password:
                <input style={{ border: "1px solid #ccc", borderRadius: "5px",  padding: "10px", marginLeft: "10px"  }} type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
              <br />
              <button className='button' type="submit">Eliminar</button>
            </form>
          </div>
          <p>{message}</p>
        </Container>
      </div>
    </div>
  );
}

export default Delete;
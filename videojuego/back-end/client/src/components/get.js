import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';
import { Container } from 'react-bootstrap';


function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [redirectToProfile, setRedirectToProfile] = useState(false);
  //Regresa a pefil
  const handleProfileClick = () => {
    setRedirectToProfile(true);
  };

  if (redirectToProfile) {
      return <ProfileSettings />;
  }

  return (
    <div style={{ position: "relative" }}>
      <button onClick={handleProfileClick} className="button" style={{ position: "absolute", top: "10px", right: "10px" }}>
          Volver a Perfil
      </button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Container>
          <table>
            <thead>
              <tr style={{backgroundColor: "#cce5ff"}}>
                <th>ID</th>
                <th>User</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.user}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  );
}

export default UserTable;

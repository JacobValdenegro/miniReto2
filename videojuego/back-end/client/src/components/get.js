import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileSettings from './profile.js';


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
    <table>
    <button onClick={handleProfileClick} className="go-back-button">
        Volver a Perfil
    </button>
      <thead>
        <tr>
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
  );
}

export default UserTable;

import React, { useState } from 'react';
import './profile.css';
import AddUser from './post.js';
import Delete from './delete.js';
import Put from './put.js';
import UserTable from './get.js';
import Newsletter from '../App.js';

function ProfileSettings() {
    const [redirectToApp, setRedirectToApp] = useState(false);
    const [redirectToPost, setRedirectToPost] = useState(false);
    const [redirectToPut, setRedirectToPut] = useState(false);
    const [redirectToGet, setRedirectToGet] = useState(false);
    const [redirectToDelete, setRedirectToDelete] = useState(false);

    //Menu
    const handleAppClick = () => {
        setRedirectToApp(true);
    };

    if (redirectToApp) {
        return <Newsletter />;
    }

    //POST
    const handlePostClick = () => {
        setRedirectToPost(true);
    };

    if (redirectToPost) {
        return <AddUser />;
    }
    
    //PUT
    const handlePutClick = () => {
        setRedirectToPut(true);
    };

    if (redirectToPut) {
        return <Put />;
    }

    //GET
    const handleGetClick = () => {
        setRedirectToGet(true);
    };

    if (redirectToGet) {
        return <UserTable />;
    }

    //DELETE
    const handleDeleteClick = () => {
        setRedirectToDelete(true);
    };

    if (redirectToDelete) {
        return <Delete />;
    }

    return (
        <div className="container">
        <div className="box">
            <h2>Perfil</h2>
            <p>Elige una opción:</p>
            <button className="button" onClick={handlePostClick}>Crear cuenta</button>
            <button className="button" onClick={handlePutClick}>Cambiar contraseña</button>
            <button className="button" onClick={handleGetClick}>Mostrar información</button>
            <button className="button" onClick={handleDeleteClick}>Eliminar cuenta</button>
            <button className="button" onClick={handleAppClick}>Volver a menú</button>
        </div>
        </div>
    );
}

export default ProfileSettings;

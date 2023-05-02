import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddUser from './post.js';
import Delete from './delete.js';
import Put from './put.js';
import UserTable from './get.js';
import App from '../App.js';

const ProfileSettings = () => {
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
        return <App />;
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
        <div style={{ position: "relative" }}>
            <button className="button"
                style={{ position: "absolute", top: "10px", right: "10px" }}
                onClick={handleAppClick}
            >
                Regreso
            </button>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Container>
                <div className="box">
                    <h2>Perfil</h2>
                    <p>Elige una opción:</p>
                    <button className="button" onClick={handlePostClick}>
                    Crear cuenta
                    </button>
                    <button className="button" onClick={handlePutClick}>
                    Cambiar contraseña
                    </button>
                    <button className="button" onClick={handleGetClick}>
                    Mostrar información
                    </button>
                    <button className="button" onClick={handleDeleteClick}>
                    Eliminar cuenta
                    </button>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default ProfileSettings;

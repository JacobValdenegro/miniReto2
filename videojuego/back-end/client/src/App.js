import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './videojuegos.jpg';
import hogwarts from './imagenes/hogwarts.jpeg';
import starwars from './imagenes/starwars.jpeg';
import tetris from './imagenes/tetris.jpeg';
import wolverine from './imagenes/wolverine.jpeg';
import fifa from './imagenes/fifa.png';
import farcry from './imagenes/farcry.webp';
import './App.css';
import PageTwo from './components/topJuegos.js';
import ProfileSettings from './components/profile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [redirectToTop, setRedirectToTop] = useState(false);
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  const handlePerfilClick = () => {
    setRedirectToProfile(true);
  };

  if (redirectToProfile) {
    return <ProfileSettings />;
  }

  const handleTopClick = () => {
    setRedirectToTop(true);
  };

  if (redirectToTop) {
    return <PageTwo />;
  }

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Banner" />
        <div className="black-bar">
          <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "white" }} onClick={handleTopClick}>Top juegos</button>
          <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "white" }} onClick={handlePerfilClick}><FontAwesomeIcon icon={faUser} />Perfil</button>
        </div>
      </header>
      <main>
        <Container>
          <Row id='main'>
            <Col md={4}>
              <div className="note">
                <img src={wolverine} alt="Nota 1" />
                <h2>Todo lo que sabemos del nuevo juego de Wolverine</h2>
                <p>...</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="note">
                <img src={tetris} alt="Nota 2" />
                <h2>Película que cuenta la historia del lanzamiento de Tetris</h2>
                <p>...</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="note">
                <img src={starwars} alt="Nota 3" />
                <h2>Reseña del nuevo Star Wars "Jedi: Survivor"</h2>
                <p>...</p>
              </div>
            </Col>
          </Row>
          <Row id='main'>
            <Col md={4}>
              <div className="note">
                <img src={hogwarts} alt="Nota 4" />
                <h2>Polémica con el nuevo juego del universo de Harry Potter "Hogwarts Legacy"</h2>
                <p>...</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="note">
                <img src={fifa} alt="Nota 5" />
                <h2>EA renombra la saga FIFA</h2>
                <p>...</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="note">
                <img src={farcry} alt="Nota 6" />
                <h2>Ranking de los mejores villanos de FarCry</h2>
                <p>...</p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
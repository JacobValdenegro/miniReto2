import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../videojuegos.jpg';
import juego1 from '../imagenes/eldenring.webp';
import persona5 from '../imagenes/persona5.jpg';
import rdr2 from '../imagenes/rdr2.jpeg';
import zelda from '../imagenes/zelda.jpg';
import mario from '../imagenes/mario.jpg';
import App from '../App.js';
import ProfileSettings from './profile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function PageTwo() {
  const [redirectToMenu, setRedirectToMenu] = useState(false);
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  const handlePerfilClick = () => {
    setRedirectToProfile(true);
  };

  if (redirectToProfile) {
    return <ProfileSettings />;
  }

  const handleMenuClick = () => {
    setRedirectToMenu(true);
  };

  if (redirectToMenu) {
    return <App />;
  }

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Banner" />
        <div className="black-bar">
          <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "white" }} onClick={handleMenuClick}> Menu </button>
          <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "white" }} onClick={handlePerfilClick}><FontAwesomeIcon icon={faUser} />Perfil</button>
        </div>
      </header>
      <main>
        <Container>
          <Row className='note-row'>
            <Col md={12}>
              <div className="note">
                <img src={juego1} alt="Nota 1" />
                <h2>Elden Ring</h2>
                <p>Tiene lugar en las Tierras Intermedias, un continente ficticio gobernado por diferentes semidioses. Anteriormente estaba gobernado por la Reina Marika la Eterna, la cual actuaba como guardiana del Círculo de Elden, una poderosa fuerza que se manifiesta como el concepto físico del orden.</p>
              </div>
            </Col>
            <Col md={12}>
              <div className="note">
                <img src={persona5} alt="Nota 2" />
                <h2>Persona 5 Royal</h2>
                <p>Es la versión extendida y mejorada del exitoso videojuego del rol japonés producido por ATLUS para consolas. La quinta entrega tiene ahora una nueva edición que, si bien nos sigue contando una épica historia en la que un grupo de estudiantes adolescentes tendrán que enfrentarse a una amenaza sobrenatural gracias a sus Persona, unos alter ego especiales, añadirá nuevas zonas, personajes y características jugables.</p>
              </div>
            </Col>
            <Col md={12}>
              <div className="note">
                <img src={rdr2} alt="Nota 3" />
                <h2>Red Dead Redemption 2</h2>
                <p>Es la secuela del aclamado Red Dead Redemption de 2010 y tercera parte de la saga Red Dead, que se inició en 2004 con Red Dead Revolver. De nuevo nos lleva al salvaje oeste para proponernos convertirnos en un pistolero forajido en un gran escenario de juego.</p>
              </div>
            </Col>
            <Col md={12}>
              <div className="note">
                <img src={zelda} alt="Nota 4" />
                <h2>The Legend of Zelda: Breath of the Wild</h2>
                <p>El juego se desarrolla en un mundo abierto enorme y dinámico, donde los jugadores pueden explorar libremente y descubrir todo tipo de secretos, misiones y desafíos. A medida que avanza la historia, Link debe enfrentar una variedad de enemigos y resolver acertijos para adquirir habilidades y equipamiento que le permitan enfrentar a Calamity Ganon.</p>
              </div>
            </Col>
            <Col md={12}>
              <div className="note">
                <img src={mario} alt="Nota 5" />
                <h2>Super Mario Odyssey</h2>
                <p>Super Mario Odyssey es un juego de plataformas en 3D desarrollado y publicado por Nintendo para la consola Nintendo Switch en 2017. En el juego, el jugador asume el papel de Mario, quien debe rescatar a su amada princesa Peach de las garras de Bowser, quien planea casarse con ella en una boda forzada.</p>
              </div>
            </Col>

          </Row>
        </Container>
      </main>
    </div>
  );
}

export default PageTwo;
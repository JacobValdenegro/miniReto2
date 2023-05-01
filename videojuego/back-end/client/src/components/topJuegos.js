import React, { useState } from 'react';
import '../newsletter.css';
import logo from '../videojuegos.jpg';
import juego1 from '../imagenes/eldenring.webp';
import persona5 from '../imagenes/persona5.jpg';
import rdr2 from '../imagenes/rdr2.jpeg';
import zelda from '../imagenes/zelda.jpg';
import mario from '../imagenes/mario.jpg';
import ProfileSettings from './profile.js';
import Newsletter from '../App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Top() {
  const [redirect, setRedirect] = useState(false);
  const [redirectToMenu, setRedirectToMenu] = useState(false);

  const handlePerfilClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <ProfileSettings />;
  }

  const handleMenuClick = () => {
    setRedirectToMenu(true);
  };

  if (redirectToMenu) {
    return <Newsletter />;
  }

  return (
    <div className="newsletter">
      <header>
        <img src={logo} alt="Imagen de videojuegos" />
        <nav>
          <button className="perfil" onClick={handleMenuClick}>
            Menu
          </button>
          <button className="perfil" onClick={handlePerfilClick}>
            <FontAwesomeIcon icon={faUser} />
            Perfil
          </button>
        </nav>
      </header>
      <section>
        <h1>Juegos mas recomendados!!</h1>
        <div className="top-games">
          <div className="game">
            <img src={juego1}/>
            <div className="game-info">
              <h3>Elden Ring</h3>
              <p>Tiene lugar en las Tierras Intermedias, un continente ficticio gobernado por diferentes semidioses. Anteriormente estaba gobernado por la Reina Marika la Eterna, la cual actuaba como guardiana del Círculo de Elden, una poderosa fuerza que se manifiesta como el concepto físico del orden.</p>
            </div>
          </div>
          <hr />
          <div className="game">
            <div className="game-info">
              <h3>Persona 5 Royal</h3>
              <p>Es la versión extendida y mejorada del exitoso videojuego del rol japonés producido por ATLUS para consolas. La quinta entrega tiene ahora una nueva edición que, si bien nos sigue contando una épica historia en la que un grupo de estudiantes adolescentes tendrán que enfrentarse a una amenaza sobrenatural gracias a sus Persona, unos alter ego especiales, añadirá nuevas zonas, personajes y características jugables.</p>
            </div>
            <img src={persona5}/>
          </div>
          <hr />
          <div className="game">
            <img src={rdr2}/>
            <div className="game-info">
              <h3>Red Dead Redemption 2</h3>
              <p>Es la secuela del aclamado Red Dead Redemption de 2010 y tercera parte de la saga Red Dead, que se inició en 2004 con Red Dead Revolver. De nuevo nos lleva al salvaje oeste para proponernos convertirnos en un pistolero forajido en un gran escenario de juego.</p>
            </div>
          </div>
          <hr />
          <div className="game">
            <div className="game-info">
              <h3>The Legend of Zelda: Breath of the Wild</h3>
              <p>Es un videojuego exclusivo de Nintendo, desarrollado, producido y distribuido por la misma compañía, para las videoconsolas Wii U y Nintendo Switch.</p>
            </div>
            <img src={zelda}/>
          </div>
          <hr />
          <div className="game">
            <img src={mario}/>
            <div className="game-info">
              <h3>Super Mario Odyssey</h3>
              <p>El juego muestra a Mario viajando a través de varios mundos conocidos como Reinos, en una nave con forma de sombrero llamada Odyssey.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2023 Newsletter de Videojuegos</p>
      </footer>
    </div>
  );
}

export default Top;
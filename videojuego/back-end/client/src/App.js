import React, { useState } from 'react';
import './newsletter.css';
import logo from './videojuegos.jpg';
import hogwarts from './imagenes/hogwarts.jpeg';
import starwars from './imagenes/starwars.jpeg';
import tetris from './imagenes/tetris.jpeg';
import wolverine from './imagenes/wolverine.jpeg';
import fifa from './imagenes/fifa.png'
import farcry from './imagenes/farcry.webp'
import ProfileSettings from './components/profile.js';
import Top from './components/topJuegos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Newsletter() {
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
    return <Top />;
  }

  return (
    <div className="newsletter">
      <header>
        <img src={logo} alt="Imagen de videojuegos" />
        <nav>
          <button className="perfil" onClick={handleTopClick}>
            Top juegos
          </button>
          <button className="perfil" onClick={handlePerfilClick}>
            <FontAwesomeIcon icon={faUser} />
            Perfil
          </button>
        </nav>
      </header>
      <div className="landing-page">
        <div className="row">
          <div className="col">
            <img src={wolverine}/>
            <h2>Todo lo que sabemos del nuevo juego de Wolverine</h2>
          </div>
          <div className="col">
            <img src={tetris}/>
            <h2>Película que cuenta la historia del lanzamiento de Tetris</h2>
          </div>
          <div className="col">
            <img src={starwars}/>
            <h2>Reseña del nuevo Star Wars "Jedi: Survivor"</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={hogwarts}/>
            <h2>Polémica con el nuevo juego del universo de Harry Potter "Hogwarts Legacy"</h2>
          </div>
          <div className="col">
            <img src={fifa}/>
            <h2>EA renombra la saga FIFA</h2>
          </div>
          <div className="col">
            <img src={farcry}/>
            <h2>Ranking de los mejores villanos de FarCry</h2>
          </div>
        </div>
      </div>


      <footer>
        <p>© 2023 Newsletter de Videojuegos</p>
      </footer>
    </div>
  );
}

export default Newsletter;
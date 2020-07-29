import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/logoW.png';
import './Menu.css';

function Menu() {
  return (
    <header className="Menu">
      <nav>
        <Link to="/">
          <img className="Logo" src={Logo} alt="MyFlix Logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo Vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu;

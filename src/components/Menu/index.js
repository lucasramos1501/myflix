import React from 'react';
import Button from '../Button';

import Logo from '../../assets/img/logoW.png';
import './Menu.css';

function Menu() {
  return (
    <header className="Menu">
      <nav>
        {console.log(Logo)}
        <img className="Logo" src={Logo} alt="MyFlix Logo" />
      </nav>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>

    </header>
  );
}

export default Menu;

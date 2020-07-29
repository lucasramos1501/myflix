import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/logoW.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="MyFlix Logo" style={{width: "100px"}}/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

import React from 'react';

import Menu from '../../components/Menu'
import dadosIniciais from '../../data/myflix.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#ffffff" }}>
      <Menu />
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Na Live de Abertura da Imersão React, vamos analisar as aplicações da tecnologia em aplicações que usamos no dia a dia, além de tirar dúvidas sobre a Imersão."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Footer />
    </div>
  );
}

export default Home;

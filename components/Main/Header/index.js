import React from 'react';

import { Container, Aside } from './styles';

function Header() {
  return (
    <Container className="home">
      <img className="left" src="/static/images/header.png" alt="imagem impulsionamos négocios" />
      <Aside>
        <h3>A sua marca precisa de uma bússola.</h3>
        <h1> Guiamos marcas </h1>
        <p> Somos a bússola de marcas que almejam atingir a plenitude nos seus negócios, e para isso, contamos com uma equipa jovem com ideias inovadoras.</p>
        <button className="btn secondary-button"> Saiba mais</button>
      </Aside>
    </Container>
  );
}

export default Header;
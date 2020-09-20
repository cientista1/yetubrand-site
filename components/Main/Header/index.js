import React from 'react';

import { Container, Aside } from './styles';

function Header() {
  return (
    <Container className="home">
      <img className="left" src="/static/images/header.png" alt="imagem impulsionamos négocios" />
      <Aside>
        <h3>Multipurpose landing template</h3>
        <h1> Beautifully simple, code. </h1>
        <p> Codelander is a beautifully simple, clean and lightweight landing page template for all types of businesses, with bold and bright colours.</p>
        <button className="btn secondary-button"> Saiba mais</button>
      </Aside>
    </Container>
  );
}

export default Header;
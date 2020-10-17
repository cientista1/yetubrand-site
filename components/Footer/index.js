import React from "react";
import { Container, Sections, Section, Reserved } from "./styles";

function Footer() {
  return (
    <Container name="footer">
      <Sections>
        <img src="static/images/logo-yetubrand-white.webp" alt="logo marka da yetubrand" />
        <Section>
          <h1>Sobre</h1>
          <p>
          A Yetubrand é uma agência criativa, sediada no Talatona. O nosso foco é acrescentar valor à sua marca.

          </p>
        </Section>
        <Section>
          <h1>Contactos </h1>
          <p className="item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Rua Direita do Centro de Convenções Talatona, Angola</span>
          </p>
          <p className="item">
            <i className="fas fa-phone-alt"></i>
            <span>+244 992 747 709 / +244 944444242</span>
          </p>
          <p className="item">
            <i className="fas fa-envelope"></i>
            <span>geral@yetubrand.com</span>
          </p>
        </Section>
        <Section className="social-media">
          <h1>Mídias sociais </h1>
          <ul>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
          </ul>
        </Section>
      </Sections>
      <Reserved>© 2020 Yetubrand™. All Rights Reserved.</Reserved>
    </Container>
  );
}

export default Footer;

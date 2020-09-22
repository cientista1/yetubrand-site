import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Sections, Section, Reserved } from "./styles";

function Footer() {
  return (
    <Container>
      <Sections>
        <img src="static/images/logo-white.png" alt="logo marka da yetubrand" />
        <Section>
          <h1>Sobre</h1>
          <p>
          A Yetubrand é uma agência criativa, sediada no Talatona. O nosso foco é acrescentar valor à sua marca.

          </p>
        </Section>
        <Section>
          <h1>Contactos </h1>
          <p className="item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Rua Direita do Centro de Convenções Talatona, Angola</span>
          </p>
          <p className="item">
            <i class="fas fa-phone-alt"></i>
            <span>+244 992 747 709 / +244 944444242</span>
          </p>
          <p className="item">
            <i class="fas fa-envelope"></i>
            <span>geral@yetubrand.com</span>
          </p>
        </Section>
        <Section className="social-media">
          <h1>Mídias sociais </h1>
          <ul>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-linkedin-in"></i>
          </ul>
        </Section>
      </Sections>
      <Reserved>© 2020 Yetubrand™. All Rights Reserved.</Reserved>
    </Container>
  );
}

export default Footer;

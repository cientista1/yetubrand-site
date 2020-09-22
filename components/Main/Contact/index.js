import React from "react";
import { Container, Content, Aside } from "../shared/styles";

function Contact() {
  const background_image = "static/images/strategy-section-bg.png";
  const asideimagesizes = {
    normal_width: 33,
    normal_height: 25,
    medium_width: 30,
    medium_height: 22,
    small_width: 20,
    small_height: 16,
  };

  return (
    <Container
      className="contact"
      background_image={background_image}
      style={{ backgroundPosition: "bottom  right -1000px" }}
    >
      <Content asideimagesizes={asideimagesizes} reverse={true}>
        <Aside>
          <h3>Contacto</h3>
          <h1>Alguma questão ?</h1>
          <p>
           Seremos gratos em ajudar você. Enviná-nos um e-mail e responderemos brevemente.
          </p>
          <button className="btn secondary-button"> Enviar e-mail</button>
        </Aside>
        <img
          style={{ marginTop: "15px" }}
          className="aside-image"
          src="/static/images/contact-header-img.png"
          alt="imagem impulsionamos négocios"
        />
      </Content>
    </Container>
  );
}

export default Contact;

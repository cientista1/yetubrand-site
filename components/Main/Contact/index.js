import React from "react";
import { sendEmail } from "../../utils/geral";
import { Container, Content, Aside } from "../shared/styles";

function Contact() {
  const background_image = "static/images/strategy-section-bg.webp";
  const asideimagesizes = {
    normal_width: 33,
    normal_height: 25,
    medium_width: 30,
    medium_height: 22,
    small_width: 20,
    small_height: 16,
  };

  function email() {
    var email = "geral@yetubrand.com";
    var subject = "Dúvidas.";
    return sendEmail(email, subject, "");
  }
  return (
    <Container
      className="contact"
      background_image={background_image}
      style={{ backgroundPosition: "bottom  right -1000px" }}
    >
      <Content
        asideimagesizes={asideimagesizes}
        reverse={true}
        data-aos="fade-out"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-center"
      >
        <Aside>
          <h3>Contacto</h3>
          <h1>Alguma questão ?</h1>
          <p>
            Seremos gratos em ajudar você. Enviá-nos um e-mail e responderemos
            brevemente.
          </p>
          <a href={email()} target="_blank">
            <button className="btn secondary-button"> Enviar e-mail</button>
          </a>
        </Aside>
        <img
          style={{ marginTop: "35px" }}
          className="aside-image"
          src="/static/images/contact-header-img.webp"
          alt="imagem impulsionamos négocios"
        />
      </Content>
    </Container>
  );
}

export default Contact;

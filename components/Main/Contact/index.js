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
    small_height: 16

  }


  return (
    <Container
      background_image={background_image}
      style={{ backgroundPosition: "bottom  right -1000px"  }}
    >
      <Content className="contact" 
       asideimagesizes={asideimagesizes}
       reverse={true}
       >
        <Aside>
          <h3>Contact</h3>
          <h1> Questions? Get in touch </h1>
          <p>
          
          We'll be happy to help answer any of your questions. Send us an email and we'll get back to you shortly.
          </p>
          <button className="btn secondary-button"> Enviar email</button>
        </Aside>
        <img
          className="aside-image"
          src="/static/images/contact-header-img.png"
          alt="imagem impulsionamos négocios"
        />
      </Content>
    </Container>
  );
}

export default Contact;

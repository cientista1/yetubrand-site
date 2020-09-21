import React from "react";
import { Container, Content, Aside } from "../shared/styles";

function Services2() {
  
  const background_image = "static/images/pricing-section-left-bg.png";
  const asideimagesizes = {
    normal_width: 34,
    normal_height: 28,
    medium_width: 30,
    medium_height: 24,
    small_width: 20,
    small_height: 16

  }



  return (
    <Container
      background_image={background_image}
      style={{ backgroundPosition: "bottom right" }}
    >
      <Content asideimagesizes={asideimagesizes}>
        <img
          className="aside-image"
          src="/static/images/services-sales-header.png"
          alt="imagem impulsionamos négocios"
        />
        <Aside>
          <h3>Our services</h3>
          <h1> Sales Growth </h1>
          <p>
          You can talk about your secondary services here, or maybe promote your excellent customer service approach. Always grab your website visitors' attention.
          </p>
          <button className="btn secondary-button"> Ver preços</button>
        </Aside>
      </Content>
    </Container>
  );
}

export default Services2;

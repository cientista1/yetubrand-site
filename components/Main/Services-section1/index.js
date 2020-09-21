import React from "react";
import { Container, Content, Aside } from "../shared/styles";
import OuServices from "./OuServices";

function Services() {
  const background_image = "static/images/services-section-bg.png";
  const asideimagesizes = {
    normal_width: 30,
    normal_height: 25,
    medium_width: 27,
    medium_height: 20,
    small_width: 20,
    small_height: 15,
  };

  return (
    <Container
      background_image={background_image}
      style={{ backgroundPosition: "top -30px left -120px" }}
    >
      <Content
        asideimagesizes={asideimagesizes}
        reverse={true}
      >
        <Aside  className="services">
          <h3>Our services</h3>
          <h1>Solving Problems </h1>
          <p>
          This is a great section to introduce your company and showcase your featured services.Website DesignApplication Development
          </p>
          <OuServices />
          <OuServices />
          <OuServices />
        </Aside>
        <img
          className="aside-image"
          src="/static/images/services-header.png"
          alt="Nossos preços são razoaveis"
        />
      </Content>
    </Container>
  );
}

export default Services;

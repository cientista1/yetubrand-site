import React from "react";
import { ScroollToElement } from "../../utils/scroller";
import { Container, Content, Aside } from "../shared/styles";

function Header() {
  const background_image = "static/images/yetubrand-strategy-section-bg.webp";
  const asideimagesizes = {
    normal_width: 30,
    normal_height: 30,
    medium_width: 27,
    medium_height: 27,
    small_width: 20,
    small_height: 20,
  };

  function readMore() {
    ScroollToElement("footer");
  }

  return (
    <Container
      background_image={background_image}
      style={{ backgroundPosition: "bottom right" }}
    >
      <Content className="home" asideimagesizes={asideimagesizes}>
        <img
          style={{ marginTop: "15px" }}
          className="aside-image"
          src="/static/images/header.webp"
          alt="imagem de yetubrand impulsionamos négocios"
          data-aos="fade-right"
          data-aos-duration="3000"
        />
        <Aside data-aos="fade-in" data-aos-duration="1500">
          <h3>A sua marca precisa de uma bússola</h3>
          <h1> Guiamos marcas </h1>
          <p>
            Somos a bússola de marcas que almejam atingir a plenitude nos seus
            negócios, e para isso, contamos com uma equipa jovem com ideias
            inovadoras
          </p>
          <button className="btn secondary-button" onClick={readMore}>
            {" "}
            Saiba mais
          </button>
        </Aside>
      </Content>
    </Container>
  );
}

export default Header;

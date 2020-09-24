import React from "react";
import { ScroollToElement } from "../../utils/scroller";
import { Container, Content, Aside } from "../shared/styles";

function Services2() {
  const background_image = "static/images/pricing-section-left-bg.webp";
  const asideimagesizes = {
    normal_width: 34,
    normal_height: 28,
    medium_width: 30,
    medium_height: 24,
    small_width: 20,
    small_height: 16,
  };

  function priceViewer(){
    ScroollToElement('prices', -50);
  }
  return (
    <Container
      background_image={background_image}
      style={{ backgroundPosition: "bottom right" }}
    >
      <Content asideimagesizes={asideimagesizes} className="services">
        <img
          className="aside-image"
          src="/static/images/services-sales-header.webp"
          alt="imagem impulsionamos négocios"
          data-aos="fade-right" 
          data-aos-duration="3000"
        />
        <Aside>
          <h3>Nossos serviços</h3>
          <h1> Anúncia com a Yetubrand </h1>
          <p>
          Caso esteja à procura de um parceiro estratégico, uma auditoria independente ou serviços específicos para uma campanha de curto, médio ou longo prazo, nossa experiência e abordagem são um activo valioso para o seu negócio.
          </p>
          <button className="btn secondary-button" onClick={priceViewer}> Descrição de serviços</button>
        </Aside>
      </Content>
    </Container>
  );
}

export default Services2;

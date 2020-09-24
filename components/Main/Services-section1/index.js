import React from "react";
import { Container, Content, Aside } from "../shared/styles";
import OuServices from "./OuServices";

function Services() {
  const background_image = "static/images/services-section-bg.webp";
  const asideimagesizes = {
    normal_width: 30,
    normal_height: 25,
    medium_width: 27,
    medium_height: 20,
    small_width: 20,
    small_height: 15,
  };

  const services = [
    {
      title: "Marketing digital",
      paragraph: [
        "Gestão de redes sociais.",
        "Monitoramento de site.",
        "Anúncios patrocinados.",
      ],
    },
    {
      title: "Design",
      paragraph: [
        "Criação de marca + Branding",
        "UI/UX design",
        "Motion graphic design",
      ],
    },
    {
      title: "Desenvolvimento",
      paragraph: ["Criação de sites", "Criação de App mobile"],
    },
  ];

  return (
    <Container
      background_image={background_image}
      style={{ backgroundPosition: "top -30px left -120px" }}
    >
      <Content
        asideimagesizes={asideimagesizes}
        reverse={true}
        className="services"
        data-aos-offset="300"
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <Aside>
          <h3>Nossos serviços</h3>
          <h1>Resolvemos seus problemas </h1>
          <p>
            Somos um fornecedor ponta a ponta de serviços digitais de marketing
            e design. Também trabalhamos na área de desenvolvimento de
            aplicativos e sites.
          </p>
          <OuServices
            info={services[0]}
          />
          <OuServices
            info={services[1]}
            
          />
          <OuServices
            info={services[2]}
           
          />
        </Aside>
        <img
          className="aside-image"
          src="/static/images/services-header.webp"
          alt="Nossos preços são razoaveis"
        />
      </Content>
    </Container>
  );
}

export default Services;

import React from "react";
import {
  Content,
  Image,
  ShowCases,
  ItemShowCase,
  Title,
} from "../shared/styles-vertical";

function Portfolio() {
  return (
    <Content className="portfolio">
      <h1> Portfólio </h1>
      <p>
        Temos experiência em agradar nossos clientes, em baixo segue alguns
        projectos trabalhado por nós.
      </p>
      <ShowCases>
        <ItemShowCase data-aos="fade-out" data-aos-duration="2000">
          <Title> Design gráfico | Logos </Title>
          <Image
            src="/static/images/design-showcase.webp"
            alt="Casos reais da utilização de nossos serviços"
          />
        </ItemShowCase>
        <ItemShowCase data-aos="fade-out" data-aos-duration="2000">
          <Title> Web sites </Title>
          <Image
            src="/static/images/websites-showcase.webp"
            alt="Casos reais da utilização de nossos serviços"
          />
        </ItemShowCase>
        <ItemShowCase data-aos="fade-out" data-aos-duration="2000">
          <Title> Ui Design </Title>
          <Image
            src="/static/images/ui-showcase.webp"
            alt="Casos reais da utilização de nossos serviços"
          />
        </ItemShowCase>
      </ShowCases>
    </Content>
  );
}

export default Portfolio;

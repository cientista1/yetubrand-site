import React from "react";
import {
  Content,
  Image,
  ShowCases,
  ItemShowCase, 
  Title
} from "../shared/styles-vertical";



function Portfolio() {
  return (
    <Content className="portfolio">
      <h1> Portfólio </h1>
      <p>
        Temos experiência em agradar nossos clientes, em baixo segue alguns projectos trabalhado por nós.
      </p>
      <ShowCases >
        <ItemShowCase>
           <Title> Design gráfico | Logos </Title>
           <Image src="/static/images/design-showcase.png" alt="Casos reais da utilização de nossos serviços" />
        </ItemShowCase>
        <ItemShowCase>
           <Title> Web sites </Title>
           <Image src="/static/images/websites-showcase.png" alt="Casos reais da utilização de nossos serviços" />
        </ItemShowCase>
        <ItemShowCase>
           <Title> Ui Design </Title>
           <Image src="/static/images/ui-showcase.png" alt="Casos reais da utilização de nossos serviços" />
        </ItemShowCase>
      </ShowCases>
     
    </Content>
  );
}

export default Portfolio;

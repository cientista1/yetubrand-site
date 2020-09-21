import React from "react";
import {
  Content,
  Behind,
  Article,
  Item,
  Itens,
} from "../shared/styles-vertical";

const articles = [
  {
    source: "/static/images/marketing.png",
    alt: "marketing digital",
    title: "Gestão de redes sociais",
    services: [
      "5 publicações / semana ",
      "20 designs ",
      "Sessão fotográfica",
      "E-mail marketing ",
      "Orçamento de ADS ($20) \n Facebook, Instagram e LinkendIn (opcional)",
    ],
  },
  {
    source: "/static/images/design.png",
    alt: "Design gráfico",
    title: "Design gráfico",
    services: [
      "Logotipo + Brand book",
      "Estacionários (Cartão de visita, capa de processo, envelope, carimbo, papel timbrado, passe de serviço e assinatura de e-mail)",
    ],
  },
  {
    source: "/static/images/sites.png",
    alt: "Web sites",
    title: "Web sites",
    services: [
      "Até 5 páginas",
      "Integração com Google Maps",
      "Optimização do site (SEO)",
      "Back-office (opcional)",
      "Domínio (.com)",
      " – 1 ano  Hospedagem (1 ano)",
      "15 contas de e-mail",
    ],
  },
];

function Pricing() {
  return (
    <Content className="pricings">
      <h1> Preço </h1>
      <p>
        Oferecemos serviço do tamanho do teu bolso, os nossos preços são de acordo com a necessidade do cliente.
      </p>
      <Behind>
        {articles.map((article) => (
          <Article key={article.title}>
            <img src={article.source} alt={article.alt} />
            <h4> {article.title}</h4>
            <Itens>
              {article.services.map((item) => (
                <Item>
                  <img
                    src="/static/images/pricing-section-true.png"
                    alt="preços"
                  />
                  <span> {item}</span>
                </Item>
              ))}
            </Itens>
            <button type="button" className="btn primary-button">
              Contratar
            </button>
          </Article>
        ))}
      </Behind>
    </Content>
  );
}

export default Pricing;

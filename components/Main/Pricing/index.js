import React from "react";
import { sendEmail } from "../../utils/geral";
import {
  Content,
  Behind,
  Article,
  Item,
  Itens,
} from "../shared/styles-vertical";

const articles = [
  {
    source: "/static/images/marketing.webp",
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
    source: "/static/images/design.webp",
    alt: "Design gráfico",
    title: "Design gráfico",
    services: [
      "Logotipo + Brand book",
      "Estacionários (Cartão de visita, capa de processo, envelope, carimbo, papel timbrado, passe de serviço e assinatura de e-mail)",
    ],
  },
  {
    source: "/static/images/sites.webp",
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

function email(service) {
  var email = "geral@yetubrand.com";
  var subject = "Contratar serviços da empresa.";
  var message = `Estou interessado em contratar o pacote de ${service} fornecido pela yetubrand. <br> <br>Espero o devido atendimento.`;
  return sendEmail(email, subject, message);
}

function Pricing() {
  return (
    <Content className="pricings">
      <h1> Soluções </h1>
      <p>
        Oferecemos serviço do tamanho do teu bolso, os nossos preços são de
        acordo com a necessidade do cliente.
      </p>
      <Behind name="prices">
        {articles.map((article) => (
          <Article
            key={article.title}
            data-aos="fade-out"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-center"
          >
            <img src={article.source} alt={article.alt} />
            <h4> {article.title}</h4>
            <Itens>
              {article.services.map((item) => (
                <Item key={item}>
                  <img
                    src="/static/images/pricing-section-true.webp"
                    alt="preços"
                  />
                  <span> {item}</span>
                </Item>
              ))}
            </Itens>
            <a href={email(article.title)} target="_blank">
              <button type="button" className="btn primary-button">
                Contratar
              </button>
            </a>
          </Article>
        ))}
      </Behind>
    </Content>
  );
}

export default Pricing;

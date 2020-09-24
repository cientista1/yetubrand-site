import React from "react";
import { Content, Block, Title } from "./styles";
function Strategy() {

  const strategies = [
    {
      source: "/static/images/yetubrand-strategy-1.webp",
      title: "Estratégia",
      desc:
        "Nossa estratégia de negócio leva em conta o perfil único da sua empresa.",
    },
    {
      source: "/static/images/yetubrand-strategy-2.webp",
      title: "Automação",
      desc:
        "Utilizamos ferramentas digitais para aumentar a eficiência do seu negócio.",
    },
    {
      source: "/static/images/yetubrand-strategy-3.webp",
      title: "Conectividade",
      desc:
        "Nos conectámos ao seu negócio para garantir maior movimentação econômica.",
    },
    {
      source: "/static/images/yetubrand-strategy-4.webp",
      title: "Manutenção",
      desc: "Ajudamos a sua empresa a manter seus recursos durante 24h.",
    },
  ];

  return (
    <Content className="content">
      {strategies.map((item) => (
        <Block key={item.title} data-aos="fade-in" data-aos-duration="2000">
          <img src={item.source} alt={item.desc} />
          <Title> {item.title} </Title>
          <p>{item.desc}</p>
        </Block>
      ))}
    </Content>
  );
}

export default Strategy;

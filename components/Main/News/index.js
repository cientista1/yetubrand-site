import React from "react";
import { Content, Behind, News as Card } from "../shared/styles-vertical";

const news = [
  {
    source: "/static/images/blog-card-1.png",
    alt: "marketing digital",
    title: "Remote Working",
    desc: "Making it easier to connect with every client worldwi",
    sizes:{
      width: 14,
      height: 14,
    }
  },
  {
    source: "/static/images/blog-card-2.png",
    alt: "Google Rankings",
    title: "Google Rankings",
    desc: "We've ranked number one on Google for multiple keywords. Read about our SEO strategies",
    sizes:{
      width: 14,
      height: 14,
    }
  },
  {
    source: "/static/images/blog-card-3.png",
    alt: "marketing digital",
    title: "Communication",
    desc: "We've made our client support services easy to access",
    sizes:{
      width: 11,
      height: 14,
    }
  },
];

function News() {
  return (
    <Content className="news">
      <h1> News </h1>
      <p>
        Nossos serviços são actualizados e oferece muitas novidades para seu
        negócio, ajudamos a te guia para o lugar dos seus clientes.
      </p>
      <Behind>
        {news.map((new_item) => (
          <Card key={new_item.title} image_size={new_item.sizes} >
            <img src={new_item.source} alt={new_item.alt} />
            <h4> {new_item.title}</h4>
            <p> {new_item.desc}</p>
          </Card>
        ))}
      </Behind>
    </Content>
  );
}

export default News;

import React, { useState } from "react";
import { Section, Header, Paragraph } from "./styles";

function OuServices() {
  const [visible, setVisible] = useState(false);
  return (
    <Section>
      <Header onClick={() => setVisible(!visible)}>
        <span> WebSite Design </span>
        <span> {visible ? "-" : "+"}</span>
      </Header>
      <Paragraph visible={visible}>
        <p>
          Some information on your web design and development services can go
          here. A few lines should do the trick.
        </p>
      </Paragraph>
    </Section>
  );
}

export default OuServices;

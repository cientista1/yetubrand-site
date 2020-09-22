import React, { useState } from "react";
import { Section, Header, Paragraph } from "./styles";

function OuServices({ info }) {
  const [visible, setVisible] = useState(false);
  return (
    <Section>
      <Header onClick={() => setVisible(!visible)}>
        <span> {info.title} </span>
        <span> {visible ? "-" : "+"}</span>
      </Header>
      <Paragraph visible={visible}>
        <p>
          {info.paragraph.map((item) => (
            <li>{item}</li>
          ))}
        </p>
      </Paragraph>
    </Section>
  );
}

export default OuServices;

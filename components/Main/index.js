import React from "react";
import Contact from "./Contact";
import Header from "./Header";
import Pricing from "./Pricing";
import Services1 from "./Services-section1";
import Services2 from "./Services-section2";
import Strategy from "./Strategy";

import { Container } from "./styles";

function Main() {
  return (
    <Container>
      <Header />
      <Strategy />
      <Services1 />
      <Services2 />
      <Pricing />
      <Contact />
    </Container>
  );
}

export default Main;

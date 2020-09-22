import React from "react";
import Container from "./styles/home";
import GlobalStyle from "./styles/globalstyles";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
const Home = () => (
  <Container>
    <Header />
    <Main />
    <Footer />
    <GlobalStyle />
  </Container>
);

export default Home;

import React from 'react';
import Container from "./styles/home";
import GlobalStyle from "./styles/globalstyles";
import Header from "../components/Header";
import Main from '../components/Main';
const Home = () =>(
  <Container>
    <Header />
   <Main />
   <GlobalStyle />
  </Container>
  
);

export default  Home;
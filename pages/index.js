import React, {useEffect} from "react";
import AOS from "aos";
import Container from "./styles/home";
import GlobalStyle from "./styles/globalstyles";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


function Home() {
  
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </Container>
  );
}



export default Home;

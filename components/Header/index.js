import React, { useState, useEffect } from "react";
import { Head, Menu, Nav } from "./styles";
import {
  Link,
 
  animateScroll as scroll,

} from "react-scroll";
import { sendEmail } from "../utils/geral";

function Header() {
  const menu = [
    {
      title: "Início",
      href: "home",
      offset: -50,
    },
    {
      title: "Serviços",
      href: "services",
      offset: -50,
    },
    {
      title: "Soluções",
      href: "pricings",
      offset: -25,
    },
    {
      title: "Portfólio",
      href: "portfolio",
      offset: -25,
    },
    {
      title: "Vantagens",
      href: "advantage",
      offset: -25,
    },
    {
      title: "Contacto",
      href: "contact",
      offset: -25,
    },
  ];

  const [justMove, setJustMove] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  function listenToScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    if (scrolled) setJustMove(true);
    else setJustMove(false);
  }

  function click() {
    document.getElementById("toggle").click();
  }

  function ScrollTop() {
    scroll.scrollToTop();
  }

  function email() {
    var email = "geral@yetubrand.com";
    var subject = "Contrato de serviço";
    return sendEmail(email, subject, "");
  }

  return (
    <Head justMove={justMove} data-aos="fade-up" data-aos-duration="1000">
      <Menu justMove={justMove}>
        <img
          className="logo"
          src="/static/images/yetubrand-logo.webp"
          onClick={ScrollTop}
        />
        <label htmlFor="toggle">
          <img src="/static/images/menu.webp" />
        </label>
      </Menu>
      <Nav className="nav">
        <input type="checkbox" id="toggle"></input>
        {menu.map((item) => (
          <li key={item.href}>
            <Link
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              onClick={() => click()}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <a href={email()} target="_blank">
          <button className="btn primary-button">Contratar</button>
        </a>
      </Nav>
    </Head>
  );
}

export default Header;

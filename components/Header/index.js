import React, { useState, useEffect } from "react";
import { Head, Menu, Nav } from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";
function Header() {
  const menu = [
    {
      title: "Home",
      href: "home",
    },
    {
      title: "Serviços",
      href: "services",
    },
    {
      title: "Preços",
      href: "pricings",
    },
    
    {
      title: "News",
      href: "news",
    },
    {
      title: "Contacto",
      href: "contacto",
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

  function click(){
    document.getElementById("toggle").click();
  }

  return (
    <Head justMove={justMove}>
      <Menu justMove={justMove}>
        <img className="logo" src="/static/images/logo.png" />
        <label htmlFor="toggle">
          <img src="/static/images/menu.png" />
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
              offset={-50}
              duration={500}
              onClick={()=> click()}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <button className="btn primary-button" onClick={()=>teste()}>Contratar</button>
      </Nav>
    </Head>
  );
}

export default Header;

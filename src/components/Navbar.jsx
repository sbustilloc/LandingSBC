import React from "react";
//import { Link } from "react-scroll";

export default function Navbar() {
  //const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header id="header">
        <h1 className="sr-only">Sandra Bustillo Casas | Landing page</h1>

        <nav
          id="main-navigation"
          className="navbar navbar-default navbar-fixed-top"
        >
          <h1 className="sr-only">Menú</h1>

          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-expanded="false"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="sr-only">Navegación</span>
              </button>
              <a
                id="brand-mobile"
                className="navbar-brand navbar-brand-center smoothScroll"
                href="#home"
              >
                <img src="../src/assets/images/icono5C.jpg" alt="" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a className="smoothScroll" href="#home">
                    Inicio <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a className="smoothScroll" href="#services">
                    Servicios
                  </a>
                </li>
                <li>
                  <a className="smoothScroll" href="#portfolio">
                    Portafolio
                  </a>
                </li>
                <li id="brand-desktop">
                  <a className="navbar-brand smoothScroll" href="#home" alt="Inicio">
                  <img src="../src/assets/images/icono5c.jpg" alt="" />

                  </a>
                </li>
                <li>
                  <a className="smoothScroll" href="#about">
                    Sobre mi
                  </a>
                </li>
                <li>
                  <a className="smoothScroll" href="#estudios">
                    Estudios
                  </a>
                </li>
                <li>
                  <a className="smoothScroll" href="#contact">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

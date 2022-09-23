import React from "react";
import { portafolios } from "../database/portafolios";

export const PortafolioPage = () => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="title-content">
                <h2 className="section-title">Portafolio</h2>

                <p>Estos son algunos trabajos realizados</p>
              </div>
            </div>
          </div>

          <div className="row">
            <nav id="portfolio-navigation" className="navbar">
              <h1 className="sr-only">Menú Portafolio</h1>

              <ul className="nav navbar-nav">
                <li>
                  <button
                    className="filter mixitup-control-active"
                    type="button"
                    data-mixitup-control
                    data-filter="all"
                  >
                    Todos
                  </button>
                </li>
                <li>
                  <button
                    className="filter"
                    type="button"
                    data-mixitup-control
                    data-filter=".web_design"
                  >
                    Plataforma Web
                  </button>
                </li>
                <li>
                  <button
                    className="filter"
                    type="button"
                    data-mixitup-control
                    data-filter=".graphic_design"
                  >
                    Logos
                  </button>
                </li>
                <li>
                  <button
                    className="filter"
                    type="button"
                    data-mixitup-control
                    data-filter=".photography"
                  >
                    Programas Web
                  </button>
                </li>
                <li>
                  <button
                    className="filter"
                    type="button"
                    data-mixitup-control
                    data-filter=".apps"
                  >
                    React.js
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="row">
            <div id="portfolio-grid" className="container">
              {portafolios.map((portafolio) => (
                
                <figure className={portafolio.className} key={portafolio.id}>
                  <div className="col-sm-4">
                    <article className="blog-entry first-row-entry" >
                      <figure>
                        <img src={portafolio.img} alt={portafolio.titulo} />

                        <figcaption className="sr-only">
                          {portafolio.titulo}
                        </figcaption>
                      </figure>

                      <div className="blog-entry-inner">
                      <h4 className="position">{portafolio.titulo}</h4>
                        <p className="entry-content">{portafolio.descripcion}</p>
                        {portafolio.url_preview != "" ? (
                          <a
                            className="btn btn-default2 green-white pull-right"
                            href={portafolio.url_preview}
                            target="_blank"
                          >
                            Visitar
                          </a>
                        ) : (
                          <h2></h2>
                        )}
                        
                        {portafolio.url_github != "" ? (
                          <a
                            className="btn btn-default2 yellow-white pull-right"
                            href={portafolio.url_github}
                            target="_blank"
                          >
                            Github
                          </a>
                        ) : (
                          <h2></h2>
                        )}
                        
                      </div>
                    </article>
                  </div>
                </figure>
              ))}
              ;<figure className="gap"></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

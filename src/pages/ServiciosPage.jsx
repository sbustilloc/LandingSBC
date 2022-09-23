import React from "react";
import { servicios } from "../database/servicios";

export const ServiciosPage = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="title-content">
                <h2 className="section-title">Servicios</h2>
              </div>
            </div>
          </div>

          <div className="services-container">
            <div className="line"></div>
            <div className="row">
              {servicios.map((servicio) => (
                <div className="col-md-3 col-sm-6"   key={servicio.id}>
                  <div className="service">
                    <figure >
                      <img src={servicio.url} alt={servicio.titulo} />
                      <figcaption>
                        <h4 className="service-title">{servicio.titulo}</h4>
                      </figcaption>
                    </figure>
                    <p> {servicio.descripcion} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="we-make-section">
          <div className="overlay"></div>
          <div className="container">
            <div className="row reorder-sm">
              <div className="col-md-5">
                <div className="img-container">
                  <img
                    src="../src/assets/images/services/general.png"
                    alt="Servicios"
                  />
                </div>
              </div>

              <div className="col-md-7">
                <div className="features-container">
                  <h3>Plataformas a la medida</h3>

                  <p>
                    Me encuentro en el sector tecnológico, enfocándome en
                    el desarrollo de software y plataformas On-Line desde el
                    2001, enfocada siempre en estos 5 pilares:
                  </p>
                  <ul className="features-list">
                    <li>CONOCER</li>
                    <li>CREAR</li>
                    <li>CONCEPTUALIZAR</li>
                    <li>CAPACITAR</li>
                    <li>CONTABILIZAR</li>
                  </ul>
                  
                  <p>  
                    Lo que permite el desarrollo integral de su empresa unificando todos sus
                    productos y servicios en un solo sistema, creciendo siempre a sus necesidades.
                  </p>

                  <p>  
                    {" "}
                  </p>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
import React from "react";

export const PerfilPage = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="title-content">
                <h2 className="section-title">Sobre mi</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="about-team slider-container">
          <div className="team-member grabbable">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-container">
                    <img
                      src="../src/assets/images/team/silueta.png"
                      alt="Jane Doe - Creative Director"
                    />
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="description">
                    <span className="h4">Sandra Bustillo Casas</span>

                    <p className="position">
                      <i>Programador</i>
                    </p>

                    <div className="biography">
                      <p>
                        Administrador Financiero y de Sistemas con experiencia
                        en planeación, diseño, dirección, organización y control
                        en el desarrollo de plataformas y programas a la medida
                        que requiera las empresas para el control interno y
                        externo de sus clientes y procesos administrativos,
                        contables, recursos humanos, inventarios y ventas.
                      </p>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

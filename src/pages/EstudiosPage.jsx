import React from "react";
import { estudios } from "../database/estudios";

export const EstudiosPage = ({ titulo }) => {
  return (
    <>

<div className="video-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="embed-responsive embed-responsive-16by9">
                
            
                <div className="features-container">
                  <h3>Conocimientos</h3>
                  <p>{" "} </p>
                  {estudios.map((estudio) => (
                    <div className="col-md-2 col-sm-3"  key={estudio.id}>
                      <div className="service">
                        <figure >
                          <img
                            src={estudio.url}
                            alt={estudio.titulo}
                            width="80px"
                          />
                          <br/><span className="service-title text-center">{estudio.titulo}</span>
                        </figure>
                      </div>
                    </div>
                  ))}
                  <p>{" "} </p>
                </div>
                
             

                </div>
              </div>

              
            </div>
          </div>
        </div>


    </>
  );
};

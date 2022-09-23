import React from "react";

export const ContactoPage = () => {
  return (
    <section id="contact">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-3">
              <p className="mail">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2374/2374449.png"
                  alt=""
                  width="35px"
                />{"   "}
                sbustillo@gmail.com <br/>  <br/> 
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
                  alt=""
                  width="35px"
                />{"   "}
                (+57) 304 2055 449  <br/>  <br/> 
                <a href="https://www.linkedin.com/in/sandra-bustillo-casas/">
                   <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt=""
                    width="35px"
                  />
                </a> 
                 sandra-bustillo-casas
              </p>

              <p className="copyright">
                {" "}
                © Copyright <span id="year">2022</span>{" "}
                <span className="text-yellow">Sandra Bustillo Casas</span>. All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

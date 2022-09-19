export const MyCard = () => {
  return (
    <section id="home">
      <h1 className="sr-only">Inicio</h1>

      <div id="carousel-hero" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="overlay"></div>

            <div className="carousel-caption">
              <span className="h4">
                Hola, me llamo <span className="text-yellow">Sandra Bustillo </span>,
                y esto es lo que hago
              </span>

              <span className="h1"><img src="../src/assets/images/logo5c.png" alt="" /></span>

              <p>
                Trabajo con proyectos de productos digitales,
                estrategias de integración, y programas a la medida.
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

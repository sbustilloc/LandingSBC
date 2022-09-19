import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";
import { ServiciosPage } from "./pages/ServiciosPage";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio">
        <InicioPage />
      </section>
      <section id="servicios">
        <ServiciosPage />
      </section>
      <section id="perfil">
        <PerfilPage />
      </section>
      <section id="estudios">
        <EstudiosPage />
      </section>
      <section id="portafolio">
        <PortafolioPage />
      </section>
      <section id="contacto">
        <ContactoPage />
      </section>
    </>
  );
}

export default App;
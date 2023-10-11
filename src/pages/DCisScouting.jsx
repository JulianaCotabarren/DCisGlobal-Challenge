import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";

const DCisScouting = () => {
  return (
    <div>
      <Navbar />
      <div className="title">
        <h1>#DCisScouting</h1>
        <h2>
          Potencia tu <span>Talento</span> y únete a la{" "}
          <span>Revolución Tecnológica</span>
        </h2>
      </div>
      <Button label="Ver puestos en DCisGlobal" />
      <div className="dcisscouting-intro">
        <p>
          En #DCisGlobal, nos diferenciamos por nuestra innovadora forma de
          descubrir talento. No nos interesan los años de experiencia, los
          títulos o las etiquetas. Buscamos personas apasionadas, creativas y
          dispuestas a desafiar los límites. Aquí, valoramos tu potencial y te
          brindamos la oportunidad de crecer y brillar. Únete a nosotros y sé
          parte de una comunidad que no teme romper las reglas y cambiar el
          juego. ¡El futuro tecnológico te espera, sin etiquetas ni límites!
        </p>
      </div>
    </div>
  );
};

export default DCisScouting;

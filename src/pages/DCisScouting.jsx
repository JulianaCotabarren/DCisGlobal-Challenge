import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import BoardContainer from "../components/Board/BoardContainer";

const DCisScouting = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobs");
  };
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
      <Button handleClick={handleClick} label="Ver puestos en DCisGlobal" />
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
      <div className="talent-selection">
        <h3>Innovative talent scouting</h3>
        <h2>Proceso de seleccion de talento</h2>
      </div>
      <BoardContainer />
    </div>
  );
};

export default DCisScouting;

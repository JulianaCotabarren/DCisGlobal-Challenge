import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import BoardContainer from "../components/Board/BoardContainer";
import Form from "../components/Form/Form";
import Titles from "../components/Titles/Titles";
import IntroText from "../components/IntroText/IntroText";

const DCisScouting = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobs");
  };

  return (
    <div>
      <Navbar />
      <Titles
        mainTitle="#DCisScouting"
        subTitle="Potencia tu Talento y únete a la Revolución Tecnológica"
      />
      <Button handleClick={handleClick} label="Ver puestos en DCisGlobal" />
      <IntroText />
      <div className="talent-selection">
        <h3>Innovative talent scouting</h3>
        <h2>Proceso de seleccion de talento</h2>
      </div>
      <BoardContainer />
      <Form />
    </div>
  );
};

export default DCisScouting;

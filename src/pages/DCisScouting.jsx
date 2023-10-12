import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import BoardContainer from "../components/Board/BoardContainer";
import Form from "../components/Form/Form";
import IntroText from "../components/IntroText/IntroText";
import HeaderTitles from "../components/Titles/HeaderTitles";
import BodyTitles from "../components/Titles/BodyTitles";

const DCisScouting = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobs");
  };

  return (
    <div>
      <Navbar />
      <HeaderTitles
        mainTitle="#DCisScouting"
        subTitle="Potencia tu Talento y únete a la Revolución Tecnológica"
      />
      <Button handleClick={handleClick} label="Ver puestos en DCisGlobal" />
      <IntroText />
      <BodyTitles
        preTitle="Innovative talent scouting"
        bodyTitle="Proceso de seleccion de talento"
      />
      <BoardContainer />
      <Form />
    </div>
  );
};

export default DCisScouting;

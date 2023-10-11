import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Empty = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/scouting");
  };
  return (
    <div className="empty">
      <h2>
        En este momento no contamos con puestos de trabajo relacionados a tu
        búsqueda.
      </h2>
      <Button handleClick={handleClick} label="Regresar" />
    </div>
  );
};

export default Empty;

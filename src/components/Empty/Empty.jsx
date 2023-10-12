import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { EmptyContainer } from "./styles/EmptyContainer";

const Empty = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/scouting");
  };
  return (
    <EmptyContainer>
      <h2>
        En este momento no contamos con puestos de trabajo relacionados a tu
        búsqueda.
      </h2>
      <Button handleClick={handleClick} label="Regresar" />
    </EmptyContainer>
  );
};

export default Empty;

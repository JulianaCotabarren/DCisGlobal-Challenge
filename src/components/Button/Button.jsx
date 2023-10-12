import { ButtonContainer } from "./styles/ButtonContainer";
import { StyledButton } from "./styles/StyledButton";

const Button = ({ label, handleClick }) => {
  return (
    <ButtonContainer className="button">
      <StyledButton onClick={handleClick}>{label}</StyledButton>
    </ButtonContainer>
  );
};

export default Button;

import { ButtonContainer, StyledButton } from "./styles";

const Button = ({ label, handleClick }) => {
  return (
    <ButtonContainer>
      <StyledButton onClick={handleClick}>{label}</StyledButton>
    </ButtonContainer>
  );
};

export default Button;

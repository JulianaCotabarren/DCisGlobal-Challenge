import { StyledLabel } from "./styles";

const InputLabel = ({ htmlFor, text }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default InputLabel;

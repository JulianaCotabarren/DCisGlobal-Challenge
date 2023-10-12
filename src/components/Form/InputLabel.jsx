import { StyledLabel } from "./styles/StyledLabel";

const InputLabel = ({ htmlFor, text }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default InputLabel;

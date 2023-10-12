import { StyledInput } from "./styles/StyledInput";
import { StyledTextArea } from "./styles/StyledTextArea";

const InputField = ({
  type,
  name,
  autoComplete,
  required,
  text,
  onChange,
  value,
}) => {
  return (
    <>
      {type === "textarea" ? (
        <StyledTextArea
          type={type}
          name={name}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          value={value}
        />
      ) : (
        <StyledInput
          type={type}
          name={name}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          value={value}
        />
      )}
    </>
  );
};

export default InputField;

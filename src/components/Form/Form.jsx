import Button from "../Button/Button";
import InputLabel from "./InputLabel";
import InputField from "./InputField";
import { FormContainer, StyledForm } from "./styles";

const Form = () => {
  return (
    <FormContainer>
      <StyledForm>
        <InputLabel htmlFor="name" text="Nombre" />
        <InputField type="text" name="name" autoComplete="off" required />
        <InputLabel htmlFor="email" text="Email" />
        <InputField type="email" name="email" autoComplete="off" required />
        <InputLabel htmlFor="about" text="Cuéntanos sobre ti" />
        <InputField type="textarea" name="about" autoComplete="off" required />
        <Button label="Enviar" />
      </StyledForm>
    </FormContainer>
  );
};

export default Form;

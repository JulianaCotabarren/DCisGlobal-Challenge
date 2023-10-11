import Button from "../Button/Button";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" autoComplete="off" required />
        <label htmlFor="about">Cuéntanos sobre ti</label>
        <textarea name="about" autoComplete="off" required />
        <Button label="Enviar" />
      </form>
    </div>
  );
};

export default Form;

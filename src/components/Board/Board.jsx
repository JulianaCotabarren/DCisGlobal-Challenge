const Board = (props) => {
  const { id, image, title, text } = props;

  return (
    <div className="board">
      <img src={image} alt={image} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Board;

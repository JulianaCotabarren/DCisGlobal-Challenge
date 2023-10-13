import {
  StyledBoard,
  StyledBoardImg,
  StyledBoardTitle,
  StyledBoardText,
} from "./styles";

const Board = (props) => {
  const { id, image, title, text } = props;

  return (
    <StyledBoard>
      <StyledBoardImg src={image} alt={image} />
      <StyledBoardTitle>{title}</StyledBoardTitle>
      <StyledBoardText>{text}</StyledBoardText>
    </StyledBoard>
  );
};

export default Board;

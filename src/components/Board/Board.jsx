import { StyledBoard } from "./styles/StyledBoard";
import { StyledBoardImg } from "./styles/StyledBoardImg";
import { StyledBoardTitle } from "./styles/StyledBoardTitle";
import { StyledBoardText } from "./styles/StyledBoardText";

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

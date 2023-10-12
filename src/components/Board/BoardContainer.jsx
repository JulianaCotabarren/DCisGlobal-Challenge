import { useContext } from "react";
import { JobsContext } from "../../context/JobsProvider";
import Board from "./Board";
import { StyledBoardContainer } from "./styles/StyledBoardContainer";

const BoardContainer = () => {
  const { boards } = useContext(JobsContext);

  return (
    <StyledBoardContainer>
      {boards.map((board) => (
        <Board key={board.id} {...board} />
      ))}
    </StyledBoardContainer>
  );
};

export default BoardContainer;

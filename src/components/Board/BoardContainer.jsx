import { useContext } from "react";
import { JobsContext } from "../../context/JobsProvider";
import Board from "./Board";

const BoardContainer = () => {
  const { boards } = useContext(JobsContext);

  return (
    <div className="board-container">
      {boards.map((board) => (
        <Board key={board.id} {...board} />
      ))}
    </div>
  );
};

export default BoardContainer;

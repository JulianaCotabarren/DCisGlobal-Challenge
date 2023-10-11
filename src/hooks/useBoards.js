import { useEffect, useState } from "react";

const useBoards = () => {
  const [boards, setBoards] = useState([]);

  const getBoards = async () => {
    try {
      const response = await fetch("../../backend/db.json");
      if (!response.ok) {
        throw new Error("Error al cargar datos");
      }
      const info = await response.json();
      const boards = info.boards;
      setBoards(boards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBoards();
  }, []);

  return {
    boards,
    getBoards,
  };
};

export default useBoards;

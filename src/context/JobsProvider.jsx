import { createContext } from "react";
import useJobs from "../hooks/useJobs";
import useBoards from "../hooks/useBoards";

export const JobsContext = createContext("");

const JobsProvider = ({ children }) => {
  const { jobs, getJobs } = useJobs();
  const { boards, getBoards } = useBoards();

  return (
    <JobsContext.Provider value={{ jobs, getJobs, boards, getBoards }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;

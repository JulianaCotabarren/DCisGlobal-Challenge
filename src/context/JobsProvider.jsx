import { createContext } from "react";
import useJobs from "../hooks/useJobs";

export const JobsContext = createContext("");

const JobsProvider = ({ children }) => {
  const { jobs, getJobs } = useJobs();

  return (
    <JobsContext.Provider value={{ jobs, getJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;

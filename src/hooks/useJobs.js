import { useEffect, useState } from "react";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const response = await fetch("../../backend/db.json");
      if (!response.ok) {
        throw new Error("Error al cargar datos");
      }
      const info = await response.json();
      const jobs = info.jobs;
      setJobs(jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return {
    jobs,
    getJobs,
  };
};

export default useJobs;

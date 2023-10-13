import { useContext } from "react";
import { JobsContext } from "../context/JobsProvider";

export const getJobsByTitle = (title = "") => {
  const { jobs } = useContext(JobsContext);
  title = title.toLowerCase().trim();

  if (title.length === 0) return [];

  const filteredJobs = jobs.filter((job) => {
    return job.title.toLowerCase().includes(title);
  });
  console.log(filteredJobs);
  return filteredJobs;
};

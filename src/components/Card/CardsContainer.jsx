import { useContext } from "react";
import { JobsContext } from "../../context/JobsProvider";
import Card from "./Card";

const CardsContainer = ({ currentFilter }) => {
  const { jobs } = useContext(JobsContext);

  const filteredJobsByType =
    currentFilter === "all"
      ? jobs
      : jobs.filter((job) => job.type === currentFilter);

  return (
    <div className="cards">
      {filteredJobsByType.map((job) => (
        <Card key={job.id} {...job} />
      ))}
    </div>
  );
};

export default CardsContainer;

/* import { useContext } from "react";
import { JobsContext } from "../../context/JobsProvider";
import Card from "./Card";
import { compareAsc, compareDesc, parse } from "date-fns";

const CardsContainer = ({ currentFilter, currentSort }) => {
  const { jobs } = useContext(JobsContext);

  const filteredJobsByType =
    currentFilter === "all"
      ? jobs
      : jobs.filter((job) => job.type === currentFilter);

  const sortedJobs = filteredJobsByType.slice();

  sortedJobs.sort((a, b) => {
    const dateA = parse(a.date, "dd/MM/yyyy", new Date());
    const dateB = parse(b.date, "dd/MM/yyyy", new Date());

    if (currentSort === "recent-first") {
      return compareDesc(dateA, dateB);
    } else if (currentSort === "earlier-first") {
      return compareAsc(dateA, dateB);
    }

    return 0;
  });

  return (
    <div className="cards">
      {sortedJobs.map((job) => (
        <Card key={job.id} {...job} date={job.date} />
      ))}
    </div>
  );
};

export default CardsContainer; */

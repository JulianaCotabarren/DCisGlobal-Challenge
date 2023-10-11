import { useContext } from "react";
import { JobsContext } from "../../context/JobsProvider";
import Card from "./Card";

const CardsContainer = ({ currentFilter, searchText }) => {
  const { jobs } = useContext(JobsContext);

  const filteredJobsByType =
    currentFilter === "all"
      ? jobs
      : jobs.filter((job) => job.type === currentFilter);

  let filteredJobsByTitle = filteredJobsByType;
  if (searchText) {
    const title = searchText.toLowerCase().trim();
    filteredJobsByTitle = filteredJobsByType.filter((job) =>
      job.title.toLowerCase().includes(title)
    );
  }

  return (
    <div className="cards">
      {filteredJobsByTitle.map((job) => (
        <Card key={job.id} {...job} />
      ))}
    </div>
  );
};

export default CardsContainer;

import { useState } from "react";
import CardsContainer from "../components/Card/CardsContainer";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

const DCISJobs = () => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div>
      <Navbar />
      <div className="title">
        <h1>#DCisJobs</h1>
        <h2>
          Desarrolla tu carrera en <span>DCisGlobal</span>
        </h2>
      </div>
      <div className="filter-and-sort">
        <Filter
          filterField="type"
          options={[
            { value: "all", label: "All" },
            { value: "Remote", label: "Remote" },
            { value: "Hibrid", label: "Hibrid" },
            { value: "Presential", label: "Presential" },
          ]}
          currentFilter={currentFilter}
          onFilterChange={handleFilterChange}
        />
        <Search />
      </div>
      <CardsContainer currentFilter={currentFilter} />
    </div>
  );
};

export default DCISJobs;

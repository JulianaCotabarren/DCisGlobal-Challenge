import { useState } from "react";
import CardsContainer from "../components/Card/CardsContainer";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Titles from "../components/Titles/Titles";

const DCISJobs = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <div>
      <Navbar />
      <Titles
        mainTitle="#DCisJobs"
        subTitle="Desarrolla tu carrera en DCisGlobal"
      />
      <div className="filter-and-search">
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
        <Search onSearch={handleSearch} />
      </div>
      <CardsContainer currentFilter={currentFilter} searchText={searchText} />
    </div>
  );
};

export default DCISJobs;

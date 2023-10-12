import { useState } from "react";
import CardsContainer from "../components/Card/CardsContainer";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import HeaderTitles from "../components/Titles/HeaderTitles";
import { FilterAndSearchContainer } from "../components/Filter/styles/FilterAndSearchContainer";
import Footer from "../components/Footer/Footer";

const DCisJobs = () => {
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
      <HeaderTitles
        mainTitle="#DCisJobs"
        subTitle="Desarrolla tu carrera en DCisGlobal"
      />
      <FilterAndSearchContainer>
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
      </FilterAndSearchContainer>
      <CardsContainer currentFilter={currentFilter} searchText={searchText} />
      <Footer />
    </div>
  );
};

export default DCisJobs;

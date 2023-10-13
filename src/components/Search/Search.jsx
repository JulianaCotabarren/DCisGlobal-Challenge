import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import {
  SearchContainer,
  StyledSearchInput,
  StyledSearchButton,
} from "./styles";

const Search = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
    navigate(`?q=${searchText}`);
    onResetForm();
  };

  return (
    <SearchContainer>
      <form onSubmit={onSearchSubmit}>
        <StyledSearchInput
          type="text"
          name="searchText"
          placeholder="Search a job"
          autoComplete="off"
          value={searchText}
          onChange={onInputChange}
        />
        <StyledSearchButton>Search</StyledSearchButton>
      </form>
    </SearchContainer>
  );
};

export default Search;

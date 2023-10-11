import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";

const Search = ({ onSearch }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
    onResetForm();
  };

  return (
    <form onSubmit={onSearchSubmit}>
      <input
        type="text"
        name="searchText"
        placeholder="Search a job"
        autoComplete="off"
        value={searchText}
        onChange={onInputChange}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;

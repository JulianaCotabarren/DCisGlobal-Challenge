import { FilterContainer, StyledFilterButton } from "./styles";

const Filter = ({ filterField, options, currentFilter, onFilterChange }) => {
  return (
    <FilterContainer>
      {options.map((option) => (
        <StyledFilterButton
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={option.value === currentFilter ? "active" : ""}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </StyledFilterButton>
      ))}
    </FilterContainer>
  );
};

export default Filter;

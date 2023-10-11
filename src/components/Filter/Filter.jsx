const Filter = ({ filterField, options, currentFilter, onFilterChange }) => {
  return (
    <div className="filter-table">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={option.value === currentFilter ? "active" : ""}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;

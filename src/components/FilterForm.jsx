const FilterForm = ({searchTerm, onSearch}) => {
    return (
        <div className="filter">
            <input className="filter-input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}></input>
        </div>
    );
};

export default FilterForm;
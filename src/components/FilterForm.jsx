const FilterForm = () => {
    return (
        <div>
            <input type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}></input>
        </div>
    );
};

export default FilterForm;
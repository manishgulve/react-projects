import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  console.log("filter :", filterText);

  const handleChangeFilterText = (e) => {
    onFilterTextChange(e.target.value);
  };
  const handleChangeInStockOnly = (e) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={handleChangeFilterText}
        placeholder="Search..."
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <label className="flex mt-4 text-sm text-gray-900">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleChangeInStockOnly}
          className="w-4 h-4 mr-2 leading-3 border-gray-300 rounded text-primary focus:ring-primary"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;

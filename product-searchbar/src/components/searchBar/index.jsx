import React from "react";

const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <label className="flex text-sm text-gray-900 mt-4">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary mr-2  leading-3"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;

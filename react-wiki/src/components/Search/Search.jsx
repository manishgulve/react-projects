import React, { useEffect, useState } from 'react'

const Search = ({setSearch, setPageNumber}) => {
  const [input, setInput] = useState("");

   // Debounce logic
   useEffect(() => {
    const timer = setTimeout(() => {
      if(input.trim().length < 3) return;
      
      setPageNumber(1);
      setSearch(input.trim());
    }, 700);

    return () => clearTimeout(timer);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reload
  };
  
  return (
    <div className="mx-auto mb-5 col-lg-8 col-md-10 col-12">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  )
}

export default Search;

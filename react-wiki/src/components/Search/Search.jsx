import React from 'react'

const Search = () => {
  return (
    <div className="mx-auto mb-5 col-lg-8 col-md-10 col-12">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default Search;

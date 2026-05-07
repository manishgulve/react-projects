import React from "react";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  const totalPages = info?.pages || 0;

  const goToPage = (page) => {
    setPageNumber(page);
  };

  const goNext = () => {
    if (pageNumber < totalPages) {
      setPageNumber((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (pageNumber > 1) {
      setPageNumber((p) => p - 1);
    }
  };

  // show first 5 pages
  const firstPages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1
  );

  return (
    <nav className="my-4">
      <ul className="pagination justify-content-center">

        {/* Previous */}
        <li className={`page-item ${pageNumber === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={goPrev}>
            Previous
          </button>
        </li>

        {/* First 5 pages */}
        {firstPages.map((page) => (
          <li
            key={page}
            className={`page-item ${pageNumber === page ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Ellipsis */}
        {totalPages > 6 && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}

        {/* Last Page */}
        {totalPages > 5 && (
          <li
            className={`page-item ${
              pageNumber === totalPages ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => goToPage(totalPages)}
            >
              {totalPages}
            </button>
          </li>
        )}

        {/* Next */}
        <li
          className={`page-item ${
            pageNumber === totalPages ? "disabled" : ""
          }`}
        >
          <button className="page-link" onClick={goNext}>
            Next
          </button>
        </li>

      </ul>
    </nav>
  );
};

export default Pagination;
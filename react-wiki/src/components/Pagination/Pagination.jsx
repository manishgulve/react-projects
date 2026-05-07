import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ pageNumber, setPageNumber, info }) => {
  const totalPages = info?.pages || 1;

  const handleChange = (event, value) => {
    setPageNumber(value);

    // optional scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Stack spacing={2} alignItems="center" my={4}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        size="large"
        siblingCount={1}
        boundaryCount={1}
      />
    </Stack>
  );
};

export default PaginationComponent;

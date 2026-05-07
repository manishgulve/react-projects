import React from "react";
import Accordion from "./Accordion/Accordion";

const Filter = ({
  setStatus,
  setGender,
  setSpecies,
  status,
  gender,
  species,
}) => {
  const handleClearFilter = () => {
    setStatus("");
    setGender("");
    setSpecies("");
  };
  return (
    <div>
      <div className="d-lg-flex d-md-flex d-block justify-content-lg-between justify-content-md-between justify-content-center">
        <h3 className="fw-bold">Filter</h3>
        <button
          className="mb-4 btn btn-outline-danger"
          onClick={handleClearFilter}
        >
          Clear Filter
        </button>
      </div>

      <Accordion
        setStatus={setStatus}
        setSpecies={setSpecies}
        setGender={setGender}
        status={status}
        gender={gender}
        species={species}
      />
    </div>
  );
};

export default Filter;

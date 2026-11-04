import React from "react";

const accordionData = [
  {
    id: 1,
    title: "Status",
    content: ["Alive", "Dead", "Unknown"],
  },
  {
    id: 2,
    title: "Species",
    content: [
      "Human",
      "Alien",
      "Humaniod",
      "Poopybutthole",
      "Mythological",
      "Unknown",
      "Animal",
      "Disease",
      "Robot",
      "Cronenberg",
      "Planet",
    ],
  },
  {
    id: 3,
    title: "Gender",
    content: ["Female", "Male", "Genderless", "Unknown"],
  },
];

const Accordion = ({
  setStatus,
  setGender,
  setSpecies,
  status,
  gender,
  species,
}) => {
  const handleFilter = (title, value) => {
    if (title === "Status") {
      setStatus(value);
    }
    if (title === "Gender") {
      setGender(value);
    }
    if (title === "Species") {
      setSpecies(value);
    }
    console.log("filter value", value);
  };
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {accordionData.map((item, index) => {
        const collapseId = `collapse-${item.id}`;

        return (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={collapseId}
              >
                {item?.title}
              </button>
            </h2>

            <div
              id={collapseId}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                {item.content
                  .filter((val) => val !== "") // remove empty values
                  .map((value, i) => (
                    <div className="form-check" key={i}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={item?.title} // group by section
                        id={`${item?.title}-${i}`}
                        value={value}
                        checked={
                          item.title === "Status"
                          ? status  === value
                          : item.title === "Gender"
                          ? gender === value
                          : species === value
                          }
                        onChange={() => handleFilter(item?.title, value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${item?.title}-${i}`}
                      >
                        {value}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

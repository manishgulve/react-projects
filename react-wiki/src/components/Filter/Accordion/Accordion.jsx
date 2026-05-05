import React from "react";

const accordionData = [
  {
    id: 1,
    title: "Status",
    content: [
      "Alive",
      "Dead",
      "Unknown"
    ],
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
      "",
      "",
      ""
    ],
  },
  {
    id: 3,
    title: "Gender",
    content: [
      "Female",
      "Male",
      "Genderless",
      "Unknown"
    ],
  },
];

const Accordion = () => {
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
                {item.title}
              </button>
            </h2>

            <div
              id={collapseId}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                <strong>{item.content}</strong>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { name, image, status, gender, location, origin, species } = fetchData;

  let characterApiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        setLoading(true);

        const response = await fetch(characterApiUrl);
        const data = await response.json();

        setFetchData(data);
      } catch (error) {
        console.error("Error fetching Character", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, [id]);
  return (
    <>
      {loading ? (
        <h5>Loading...</h5>
      ) : (
        <div className="container my-4" >
          <div className="gap-3 d-flex flex-column justify-content-center" style={{maxWidth:'540px', margin:'auto'}} >
            <h5 className="mb-4 fw-bold fs-5">{name}</h5>
            <img src={image} className="card-img-top" alt={name} />
            <span
              className={`card-badge badge ${
                status === "Alive"
                  ? "bg-success"
                  : status === "Dead"
                  ? "bg-danger"
                  : "bg-secondary"
              }`}
            >
              {status}
            </span>
            <div className="content">
              <p className="mb-0fs-6"><b>Gender:</b> {gender}</p>
              <p className="mb-0fs-6"><b>Location:</b> {location?.name}</p>
              <p className="mb-0fs-6"><b>Origin:</b> {origin?.name}</p>
              <p className="mb-0fs-6"><b>Species:</b> {species}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;

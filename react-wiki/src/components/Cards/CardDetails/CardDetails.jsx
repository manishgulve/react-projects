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
        <div className="container my-4 d-flex align-items-center" style={{height:"100vh", height: 'calc(100vh - 140px)'}}>
            <div className="mx-auto mb-3 card" style={{width:'100%', maxWidth:"540px", borderRadius:"20px",overflow:'hidden'}}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={image} className="card-img-top" alt={name} style={{borderRadius:"0px 0px 0px 0px"}}/>
                        <span
                        className={`card-badge position-absolute badge ${
                            status === "Alive"
                            ? "bg-success"
                            : status === "Dead"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                        >
                        {status}
                        </span>
                    </div>
                    <div className="p-4 col-md-7 d-flex flex-column justify-content-center">
                        <h5 className="mb-2 fw-bold card-title">{name}</h5>
                        <p className="mb-1 fs-6"><b>Gender:</b> {gender}</p>
                        <p className="mb-1 fs-6"><b>Location:</b> {location?.name}</p>
                        <p className="mb-1 fs-6"><b>Origin:</b> {origin?.name}</p>
                        <p className="mb-1 fs-6"><b>Species:</b> {species}</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;

import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/InputGroup/InputGroup";

const Episodes = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const { air_date, episode, name } = info;
  const [id, setID] = useState(1);

  let episodeApiUrl = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchEpisodeData = async () => {
      try {
        setLoading(true);
        const response = await fetch(episodeApiUrl);
        const data = await response.json();
        setInfo(data);
        console.log("EpisodeData", data);
        const charactersData = await Promise.all(
          data.characters.map(async (url) => {
            const res = await fetch(url);
            return res.json();
          }));

        setResults(charactersData);
        console.log("CharacterData", charactersData);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodeData();
  }, [id]);
  return (
    <div className="App">
      <div className="container my-4">
        <h1 className="mb-2 text-center fw-bold">
          Episode name : <span className="text-primary">{name}</span>
        </h1>
        <h5 className="mb-2 text-center fw-medium text-secondary">
          Code: <span className="text-primary">{episode || "Unknown"}</span>
        </h5>
        <h5 className="mb-4 text-center fw-medium text-secondary">
          Air Date: <span className="text-primary">{air_date}</span>
        </h5>
        <div className="row">
          <div className="mb-4 col-lg-3">
            <h3 className="fw-bold">Pick Episode</h3>
            <InputGroup name="Episode" changeID={setID} total={51} />
          </div>
          <div className="col-lg-9">
            {loading ? <h3>Loading.....</h3> : <Cards page="/character" results={results} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;

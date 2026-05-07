import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import Cards from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const { info, results } = fetchData;

  let apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("ApiData", data?.results);

        setFetchData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);
  return (
    <div className="App">
      <div className="container my-4">
        <h1 className="mb-4 text-center fw-bold">
            Characters
        </h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <div className="row">
          <div className="col-lg-3">
            <Filter
              setStatus={setStatus}
              setSpecies={setSpecies}
              setGender={setGender}
              status={status}
              gender={gender}
              species={species}
            />
          </div>
          <div className="col-lg-9">
            {loading ? <h3>Loading.....</h3> : <Cards page="/character" results={results} />}
          </div>
        </div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          info={info}
        />
      </div>
    </div>
  );
}

export default Home;

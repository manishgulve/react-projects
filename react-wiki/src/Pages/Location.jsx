import React, { useEffect, useState } from 'react'
import InputGroup from '../components/Filter/InputGroup/InputGroup';
import Cards from '../components/Cards/Cards';

const Location = () => {
    const [results, setResults] = useState([]);
    const [info, setInfo] = useState([]);
    const [number, setNumber] = useState(1);
    const [loading, setLoading] = useState(false)

    const { dimension, type, name } = info;
    
    const locationApiUrl = `https://rickandmortyapi.com/api/location/${number}`;

    useEffect(() => {
        const fetchLocationData = async () => {
            try{
                setLoading(true);
                
                const response = await fetch(locationApiUrl);
                const data = await response.json();
                setInfo(data);
                console.log("Location Data", data);

                const residentsData = await Promise.all(
                    data?.residents?.map(async (url) => {
                        const res = await fetch(url);
                        return res.json();
                    })
                );
                
                setResults(residentsData);
            }catch(error){
                console.error("Error fetching location:", error);
            }finally{
                setLoading(false);
            }
        }

        fetchLocationData();
    }, [number]);
  return (
    <div className="App">
      <div className="container my-4">
        <h1 className="mb-2 text-center fw-bold">
            Location: <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5 className="mb-2 text-center fw-medium text-secondary">
          Dimension: <span className="text-primary">{dimension || "Unknown"}</span>
        </h5>
        <h5 className="mb-4 text-center fw-medium text-secondary">
          Type: <span className="text-primary">{type || "Unknown"}</span>
        </h5>
        <div className="row">
          <div className="mb-4 col-lg-3">
            <h3 className="fw-bold">Pick Location</h3>
            <InputGroup  name="Location" changeID={setNumber} total={126}/>
          </div>
          <div className="col-lg-9">
            {loading ? <h3>Loading.....</h3> : <Cards page="/character" results={results} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from './components/search/search';
import Cards from './components/cards/cards';
import Filter from './components/filter/filter';
import { useEffect, useState } from 'react';


function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        
        const data = await response.json();
        console.log("ApiData", data?.results);
        setCharacters(data?.results);
          
      }catch (err) {
        console.error(err);
      }finally{
        setLoading(false);
      }
    }

    fetchData();
  }, [page])
  return (
    <div className='App'>
        <div className='container my-4'>
            <h1 className='mb-4 text-center fw-bold'>Rick & Morty <span className='text-primary'>WiKi</span></h1>
            <Search />
            <div className='row'>
              <div className='col-lg-3'>
               <Filter />
              </div>
              <div className='col-lg-9'>
                <Cards characters={characters}/>
              </div>
            </div>
           
              
        </div>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../cards/Cards';
import style from "./movielist.module.css"
function Movielist() {
  const [val, setVal] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=638a3f9473d23c2a2f2cb8ac6f084005&language=en-US`)
      .then(response => response.json())
      .then(store => setVal(store.results)) 
      .catch(err => console.error(err));
  }, [type]); 

  return (
    <>
    <div className={style.cardContainer}>
      {val.map((show) => (
        <Cards key={show.id} data={show}/> // Make sure each child has a unique `key`
      ))}
      </div>
    </>
  );
}

export default Movielist;

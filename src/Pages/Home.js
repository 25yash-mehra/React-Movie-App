import React, { useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "./Home.module.css";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiKey = "be31e27818cb198ac3de94964cd0297e";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    fetch(url, options)
    .then((response) => response.json())
      .then((item) => {
        console.log(item.results);
        setData(item.results);
      })
      .catch((err) => console.error(err));
  }, []);
 

  return (
    <>
    {/* autoPlay="true" infiniteLoop="true" */}

    
      <Carousel>
        {data.map((entry, index) => {
          return (
            <div key={index} className={style.all}>
              <div className={style.imgSlide}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${entry.backdrop_path}`}
                  alt="movie"
                />
              </div>
              <div className={style.content}>
              <div className={style.vote}>
                <p>{entry.vote_average}</p>
                <div className={style.sitara}>
                <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <div className={style.release}>
              <p>{entry.release_date}</p>
              </div>
              <div className={style.title}>
                <p>{entry.title}</p>
              </div>
              <div className={style.overview}>
                <p>{entry.overview}</p>
              </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default Home;

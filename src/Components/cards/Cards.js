import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink } from 'react-router-dom';
import style from './cards.module.css';

const Cards = ({ data }) => {
  const [load, isLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoad(false);
    }, 1500);
  }, []);

  return (
    <>
      {load ? (
        <div className={style.cards}>
          <SkeletonTheme>
            <Skeleton duration={2} height={300} />
          </SkeletonTheme>
        </div>
      ) : (
        <NavLink to={`movies/${data.id}`} className={style.navLink}>
          <div className={style.cards}>
            <div className={style.poster}>
              <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt='movies' />
            </div>
            <div className={style.title}>
              {data.title}
            </div>
            <div className={style.description}>
              {data.overview ? data.overview.substring(0, 100) + '...' : 'No description available'}
            </div>
            <div className={style.release}>
              Release Date: {data.release_date}
            </div>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default Cards;

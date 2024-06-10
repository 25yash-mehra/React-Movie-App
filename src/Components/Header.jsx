import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.mainHead}>
          <NavLink to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="logo"
              width="100px"
            />
          </NavLink>
          <nav className={style.navList}>
            <ul>
              <NavLink to="/movies/popular">Popular</NavLink>
              {/* <li>Top Rated</li> */}
              <NavLink to="/movies/top_rated">Top Rated</NavLink>
              {/* <li>Upcoming</li> */}
              <NavLink to="/movies/upcoming">Upcoming</NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

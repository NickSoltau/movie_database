import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import back_arrow from "../../assets/back_arrow_icon.png";

function Search({ apiData }) {
  const [apiRequest, setApiRequest] = useState([]);
  const location = useLocation();

  const searchTerm = apiData || location.state?.searchTerm || "";

  useEffect(() => {
    async function fetchMovies() {
      if (!searchTerm) return;
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?s=${searchTerm}&apikey=7cddbfc`,
        );
        if (data.Search) {
          setApiRequest(data.Search);
        } else {
          setApiRequest([]);
        }console.log(apiRequest)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchMovies();
  }, [searchTerm]);

  return (
    <>
      <div className="search">
        <div className="search__nav">
          <Link to="/">
            <button className="back__btn">
              <img src={back_arrow} alt="back" />
            </button>
          </Link>
        </div>
        <h2 className="search__results--title">
          Search Results for: {searchTerm}
        </h2>
        <div className="search__results">
          {apiRequest.length > 0 ? (
            apiRequest.map((movie, index) => (
              <div className="movie__container" key={index}>
                <img
                  className="movie__poster"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <div className="movie__info">
                  <h3 className="movie__title">{movie.Title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>No results found for "{apiData}".</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;


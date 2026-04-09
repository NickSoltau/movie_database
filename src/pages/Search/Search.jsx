
import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import back_arrow from "../../assets/back_arrow_icon.png";
import Modal from "../../components/Modal/Modal";
import placeholder from '../../assets/placeholder.png'

function Search({ apiData }) {

  // api #1 using search request

  const [apiRequest, setApiRequest] = useState([]);
  const [selectedMovie, setSelectedMovie]= useState(null)
  const [showModal, setShowModal]= useState(false)
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchTerm = apiData || location.state?.searchTerm || "";
 
  useEffect(() => {
    async function fetchMovies() {
      if (!searchTerm) return;
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?s=${searchTerm}&apikey=7cddbfc`,
        );
          setApiRequest(data.Search || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchTerm]);

  // api #2 using api#1 to get imdbID for api #2


    async function onMovieClick(imdbID) {
      try {
            const { data } = await axios.get(
              `https://www.omdbapi.com/?i=${imdbID}&apikey=7cddbfc`
            );
            setSelectedMovie(data); // Save the full details (Plot, Genre, etc.)
            setShowModal(true);
          } catch (error) {
            console.error("Error fetching movie details:", error);
          }
        }

  return (
    <>
      <div className="search">
        <div className="search__nav">
          <Link to="/">
            <button className="back__btn">
              <img src={back_arrow} alt="back" className="back__btn--img"/>
            </button>
          </Link>
        </div>
        <h2 className="search__results--title">
          Search Results for: {searchTerm}
        </h2>

        <div className="search__results">
            {loading ? (
          <p>Loading...</p> 
        ) :
          apiRequest.length > 0 ? (
            apiRequest.map((movie) => (
              <div className="movie__container" key={movie.imdbID}
              onClick={() => onMovieClick(movie.imdbID)}>
                <img
                  className="movie__poster"
                  src={movie.Poster !== "N/A" ? movie.Poster : placeholder} 
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
        
             {showModal && <Modal movie={selectedMovie} setShowModal={setShowModal} /> }
             
          
         
        </div>
      </div>
    </>
  );
}

export default Search;



import React from "react";
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar.jsx'
import Blockbuster from "../../components/Blockbuster/Blockbuster";
import play_icon from "../../assets/play_icon.png";
import movie_ticket from "../../assets/movie_ticket.png";
import background_img from "../../assets/background_1.jpg";
import { useNavigate } from "react-router-dom";

const Home = ({ setQuery, query = "" }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const submitQuery = () => {
    if (query.trim()) {
      // Navigate to search results with query param
      navigate(`/search`, { state: { searchTerm: query } });
      
    }
  };

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      submitQuery();
    }
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <div className="searchbar">
          <input
            className="search__input"
            type="text"
            placeholder="Enter Movie Title"
            onChange={handleSearch}
            value={query}
            onKeyDown={pressEnter}
          />
          <button className="search__btn btn" onClick={submitQuery}>
            <img src={play_icon} alt="Search" />
          </button>
        </div>
        <div className="movie__ticket--wrapper">
          <img className="movie__ticket" src={movie_ticket} alt="Ticket" />
        </div>
      </div>
      <img
        src={background_img}
        alt="Background"
        className="background__image"
      />
      <Blockbuster />
    </div>
  );
};

export default Home;
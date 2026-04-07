/*
import React, { useEffect, useState } from 'react'
import './Search.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import back_arrow from '../../assets/back_arrow_icon.png'
import guardians from '../../assets/guardians.jpg'

function Search({apiData}) {

  const [apiRequest, setApiRequest]= useEffect([])

  async function fetchMovies() {
        try {
            // Added try-catch for better error handling
            const { data } = await axios.get(`https://www.omdbapi.com/?s=${apiData}&apikey=7cddbfc`)
            if (data.Search) {
                setApiRequest(data.Search)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }


   useEffect(() => {
    if(apiData){    
      fetchMovies()
    },[]
   })

    return (
        <>
            <div className='search'>
                <div className="search__nav">
                    <Link to={'/home'}><button className='back__btn'><img src={back_arrow} alt="back" /></button></Link>
                </div>
                <h2 className='search__results--title'>Search Results for:</h2>
                <div className="search__results">

                   {apiData.map((movie, index) => (
                            <div className="movie__container" key={index}>
                                <img className='movie__poster' src={movie.Poster}  />
                                <div className="movie__info">
                                    <h3 className='movie__title'>{movie.Title}</h3>
                                </div>
                            </div>))}
                  
                </div>
            </div>
        </>
    )
}

export default Search
*/
import React, { useEffect, useState } from 'react'
import './Search.css'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import back_arrow from '../../assets/back_arrow_icon.png'

function Search({apiData}) {
    
    const [apiRequest, setApiRequest] = useState([]) 
    const location= useLocation()

    const searchTerm = location.state?.searchTerm;

    async function fetchMovies() {
        if (!apiData) return; // Guard clause
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?s=${apiData}&apikey=7cddbfc`)
            if (data.Search) {
                setApiRequest(data.Search) // 2. Update state with search results
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }


    return (
        <>
            <div className='search'>
                <div className="search__nav">
                    <Link to={'/home'}><button className='back__btn'><img src={back_arrow} alt="back" /></button></Link>
                </div>
                <h2 className='search__results--title'>Search Results for: {apiData}</h2>
                <div className="search__results">
                    {/* 4. Map over apiRequest state, not apiData props */}
                    {apiRequest.map((movie, index) => (
                        <div className="movie__container" key={index}>
                            <img className='movie__poster' src={movie.Poster} alt={movie.Title} />
                            <div className="movie__info">
                                <h3 className='movie__title'>{movie.Title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search

import React, { useEffect, useRef, useState } from 'react'
import './Blockbuster.css'
import axios from 'axios'

const Blockbuster = () => {
    const cardsRef = useRef()
    const [apiData, setApiData] = useState([])

    const handleWheel= (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

    async function fetchMovies() {
        try {
            // Added try-catch for better error handling
            const { data } = await axios.get(`https://www.omdbapi.com/?s=batman&apikey=7cddbfc`)
            if (data.Search) {
                setApiData(data.Search)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        fetchMovies()
         cardsRef.current.addEventListener("wheel", handleWheel);
    }, [])

   



    return (
        <div className='blockbuster'>
            <div className='title__cards'>
                <h2 className='section__title'>Blockbuster Movies</h2>
                <div className="card__list" ref={cardsRef}>
                    {apiData.map((movie, index) => (
                        <div className="card" key={index}>
                            <img src={movie.Poster} alt={movie.Title} className='card__img' />
                            <p className='card__title'>{movie.Title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blockbuster



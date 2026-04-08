

import React, { useRef } from 'react'
import './Modal.css'


const Modal = ({movie, setShowModal}) => {

    const toggle= useRef(null)
     const closeModal= (event) => {
        if(event.target===toggle.current){
            setShowModal(false)
        }
    }

  return (
    <div className='modal' 
    ref={toggle}
    onClick={closeModal}>
      <div className="modal__movie">
        <img src={movie.Poster}  className='modal__movie--poster'/>
        <div className="modal__info">
            <h3 className='modal__title'>{movie.Title}</h3>
            <p className='modal__rating'>Rated: {movie.Rated}</p>
            <p className='modal__release'>Released: {movie.Released}</p>
            <p className='modal__plot'>{movie.Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal

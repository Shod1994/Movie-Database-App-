import React from 'react';
import './App.css'


function Movie({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
    </div>
  );
}

export default Movie;
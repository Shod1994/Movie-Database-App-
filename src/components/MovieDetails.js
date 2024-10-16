import React from 'react';
import '../App.css'

function MovieDetails({ movie }) {
  return (
    <div className = "Movie-Details">
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Genre: {movie.Genre}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
}

export default MovieDetails;
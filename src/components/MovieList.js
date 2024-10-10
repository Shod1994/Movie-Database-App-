import React from 'react';
import '../MovieList.css'; // Make sure to import the CSS file for the grid layout

function MovieList({ movies, onMovieSelect }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div 
          className="movie-item" 
          key={movie.imdbID} 
          onClick={() => onMovieSelect(movie.imdbID)}
        >
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
          <h3>({movie.Year})</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
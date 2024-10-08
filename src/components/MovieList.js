import React from 'react'

function MovieList ({ movies, onMovieSelect}) {
  return (
      <div>
          {movies.map(movie => (
              <div key={movie.imdbID} onClick={() => onMovieSelect(movie.imdbID)}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          </div>
          ))}
      </div>
  );
}

export default MovieList;
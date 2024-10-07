import React from 'react'
import Movie from './Movie'
function MovieList({ movies }) {
    return (
      <div>
        {movies.length > 0 ? (
          <div className="movie-list">
            {movies.map(movie => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    );
  }
  
  export default MovieList;
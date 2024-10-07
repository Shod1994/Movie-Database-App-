import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (searchQuery) => {
    const apiKey = '2992d381'; // Replace with your OMDb API key
    const url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setError('');
        } else {
          setError(data.Error);
          setMovies([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch movie data.');
      });
  };

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList'; // Make sure this component accepts the selected movie callback
import MovieDetails from './components/MovieDetails'; // New component to display detailed movie info
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to hold the selected movie
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchQuery, imdbID = null) => {
    const apiKey = '2992d381'; // Replace with your OMDb API key
    let url;

    // Determine the URL based on whether an imdbID is provided
    if (imdbID) {
      // Fetch detailed data for the selected movie
      url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
    } else {
      // Fetch movie list based on search query
      url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;
    }

    setLoading(true);
    setSelectedMovie(null); // Reset selected movie when starting a new search

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.Response === "True") {
          if (imdbID) {
            // If we're fetching detailed data, set the selected movie
            setSelectedMovie(data);
            setError('');
          } else {
            // If we're fetching the list, set the movie list
            setMovies(data.Search);
            setError('');
          }
        } else {
          setError(data.Error);
          if (!imdbID) setMovies([]); // Clear movie list if search failed
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        setError('Failed to fetch movie data.');
      });
  };

  return (
    <div className="App">
      <h1>Shod's Movie Database</h1>
      <SearchBar onSearch={(query) => handleSearch(query)} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!selectedMovie ? (
        <MovieList movies={movies} onMovieSelect={(imdbID) => handleSearch(null, imdbID)} />
      ) : (
        <MovieDetails movie={selectedMovie} />
      )}
    </div>
  );
}

export default App;
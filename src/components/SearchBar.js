import React, { useState } from 'react'
import '../SearchBar.css'

function SearchBar ({ onSearch }) {
    const [query, setQuery] = useState ('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query){
            onSearch(query);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
            <input type ="text" 
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a movie..."
            className='search-input'
            />
            <button type="submit" className='search-btn'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar; 
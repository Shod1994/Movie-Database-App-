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
        <form onSubmit={handleSubmit}>
        <input type ="text" className='Search-input'
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
        />
        <button type="submit" className='Search-btn'>Search</button>
        </form>
    );
}

export default SearchBar; 
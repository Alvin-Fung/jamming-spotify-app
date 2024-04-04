import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <div className="Search-Bar">
            <input
                placeholder="Enter A Song, Album or Artist"
                onChange={handleInputChange}
            />
            <button className="searchButton" onClick={handleSubmit}>Search</button>
        </div>
    )

}

export default SearchBar;

import React, { useState } from 'react';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }
    return (
        <div className="Search-Bar">
            <input placeholder="Enter A Song, Album or Artist" />
            <button className="searchButton">Search</button>
        </div>
    )

}

export default SearchBar;

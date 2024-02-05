import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        //State and method here
    }

    render() {
        return (
            <div className="Search-Bar">
                <input placeholder="Enter A Song, Album or Artist" />
                <button className="searchButton">Search</button>
            </div>
        )

    }
}

export default SearchBar;

import React, { Component } from 'react';
import TrackList from '../TrackList/Tracklist';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        //State and methods go here. Grab the mock data we have in App.js and move it here.
    }
    render() {
        console.log('Search Results - searchResults:', this.props.searchResults);
        return (
            <div>
                <h2>Results</h2>
                <TrackList searchResults={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults;

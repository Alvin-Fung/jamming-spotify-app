import React, { Component } from 'react';
import TrackList from '../TrackList/Tracklist';
import './searchResults.css';
const jsonData = require('./searchresults.json');

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: jsonData.searchresults,
            message: '',
        };
    }

    render() {
        console.log('Search Results - searchResults:', this.state.searchResults);
        return (
            <div className="Search-Results">
                <h2>Results</h2>
                {/* Use this.props.onAddTrack instead of this.addTrackToPlaylist */}
                <TrackList tracks={this.props.searchResults} onAdd={this.onAdd} />
            </div>
        );
    }
}

export default SearchResults;

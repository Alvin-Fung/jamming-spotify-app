import React, { Component } from 'react';
import TrackList from '../TrackList/Tracklist';

class SearchResults extends Component {

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

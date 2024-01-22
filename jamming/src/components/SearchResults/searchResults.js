import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        //State and method here
    }

    render() {
        return (
            <div>
                <h2>Results</h2>
                <Tracklist />
            </div>
        )
    }
}

export default SearchResults;

import React, { Component } from 'react';
import TrackList from './components/TrackList/TrackList';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        //State and method here
    }

    render() {
        return (
            <div>
                <h2>Results</h2>
                <TrackList />
            </div>
        )
    }
}

export default SearchResults;

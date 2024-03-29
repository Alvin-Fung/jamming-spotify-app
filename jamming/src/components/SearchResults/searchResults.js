import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './searchResults.css';

function searchResults(props) {
    return (
        <div className="Search-Results">
            <h2>Results</h2>
            <TrackList
                tracks={props.searchResults}
                onAdd={props.onAdd}
            />
        </div>
    )
}

export default searchResults;

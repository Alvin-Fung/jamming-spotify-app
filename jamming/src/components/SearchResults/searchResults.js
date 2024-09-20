import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './searchResults.css';

function searchResults(props) {
    return (
        <div className="Search-Results">
            <div className="Search-Results-column">
                <h2>Results</h2>
                <TrackList
                    tracks={props.searchResults}
                    onAdd={props.onAdd}
                />
            </div>
        </div>
    )
}

export default searchResults;

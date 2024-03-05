import React, { Component } from 'react';
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        const { searchResults } = this.props;

        console.log('searchResults: ', searchResults);
        if (!searchResults || !Array.isArray(searchResults)) {
            return <div>No results to display.</div>
        }

        return (
            <div className="TrackList">
                {searchResults.map(track => (
                    <Track key={track.id} track={track} onAdd={this.props.onAdd} />
                ))}
            </div>
        )
    }
}

export default TrackList; 

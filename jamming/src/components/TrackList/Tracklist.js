import React, { Component } from 'react';
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        const { searchResults } = this.props;

        return (
            <div>
                {searchResults.map(track => (
                    <Track key={track.id} track={track} />
                ))}
            </div>
        )
    }
}

export default TrackList; 

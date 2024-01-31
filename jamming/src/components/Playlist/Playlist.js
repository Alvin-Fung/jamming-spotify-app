import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';

class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchResults } = this.props;
        return (
            <div>
                <h2>My Playist</h2>
                <Tracklist searchResults={searchResults} />
            </div>
        );
    }
}

export default Playlist; 

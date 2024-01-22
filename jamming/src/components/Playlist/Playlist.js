import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';

class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>My Playist</h2>
                <Tracklist />
            </div>
        );
    }
}

export default Playlist; 

import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: "My Playlist",
            playlistTracks: []
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.playlistName}</h2>
                <Tracklist searchResults={this.state.playlistTracks} />
            </div>
        );
    }
}

export default Playlist; 

import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: "My Playlist",
            playlistTracks: [
                { id: '1', name: 'Shine On You Crazy Diamond, Pts. 1-5 ', artist: 'Pink Floyd', album: 'Wish You Were Here' },
                { id: '2', name: `I'm Not In Love`, artist: '10cc', album: 'The Original Soundtrack' }
            ]
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

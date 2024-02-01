import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: "My Playlist",
            playlistTracks: [
                { id: '1', name: 'Shine On You Crazy Diamond, Pts. 5-6 ', artist: 'Pink Floyd', album: 'Wish You Were Here' },
                { id: '2', name: 'Dance The Night Away', artist: 'Cream', album: 'Disraeli Gears' }
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

import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: "My Playlist",
            playlistTracks: [
                {
                    id: '1',
                    name: 'Shine On You Crazy Diamond, Pts. 5-6 ',
                    artist: 'Pink Floyd',
                    album: 'Wish You Were Here'
                },
                {
                    id: '2',
                    name: 'Dance The Night Away',
                    artist: 'Cream',
                    album: 'Disraeli Gears'
                }
            ]
        };
    }
    //Test setup


    addTrack = (track) => {
        this.playlistTracks.push(track);
    }



    render() {
        return (
            <div className="Playlist">
                <h2>{this.state.playlistName}</h2>
                <Tracklist searchResults={this.state.playlistTracks} />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        );
    }
}

export default Playlist; 

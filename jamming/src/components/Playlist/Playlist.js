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

    // runPlaylistTracks() {
    //     //Instance
    //     const playlistInstance = new Playlist();
    //     //Sample track and playlist tracks
    //     const newTrack = {
    //         id: '3',
    //         name: 'Another Track',
    //         artist: 'Another Artist',
    //         album: 'Another Album'
    //     }

    //     //Test One - To see if a track is not in the playlist:
    //     console.log(playlistInstance.containsTrack(newTrack, playlistInstance.state.playlistTracks)); //Return False
    //     console.log('Track added to your playlist!');

    //     //Test Two - To see if a track is in the playlist:
    //     const existingTrack = playlistInstance.state.playlistTracks[0];
    //     console.log(playlistInstance.containsTrack(existingTrack, playlistInstance.state.playlistTracks)); //Return True
    //     console.log('This track is already in your playlist.');
    // }

    // componentDidMount() {
    //     this.runPlaylistTracks();
    // }

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

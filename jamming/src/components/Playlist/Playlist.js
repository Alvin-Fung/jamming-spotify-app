import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';
import './Playlist.css';
const jsonData = require('./playlist.json');

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: "My Playlist",
            playlistTracks: jsonData.tracks || []
        };
    }

    addTrack = (track) => {
        if (!this.state.playlistTracks.some(existingTrack => existingTrack.id === track.id)) {
            this.setState(prevState => ({
                playlistTracks: [...prevState.playlistTracks, track]
            }));
        }
    }

    render() {
        return (
            <div className="Playlist">
                <div className='playlist-column'>
                    <h2>{this.state.playlistName}</h2>
                    <Tracklist searchResults={this.props.playlistTracks} />
                    <button className="Playlist-save">Save to Spotify</button>
                </div>
            </div>
        );
    }
}

export default Playlist; 

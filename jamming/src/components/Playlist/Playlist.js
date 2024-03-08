import React, { Component } from 'react';
import Tracklist from '../TrackList/Tracklist';
import './Playlist.css';
// const jsonData = require('./playlist.json');

function Playlist(props) {
    return (
        <div className="Playlist">
            <div className='playlist-column'>
                <h2>{props.playlistName}</h2>
                <Tracklist
                    searchResults={props.playlistTracks}
                />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist; 

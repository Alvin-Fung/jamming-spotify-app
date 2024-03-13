import React from 'react';
import Tracklist from '../TrackList/Tracklist';
import './Playlist.css';

function Playlist(props) {
    console.log('Playlist ', props.playlistTracks);
    return (
        <div className="Playlist">
            <div className='playlist-column'>
                <h2>{props.playlistName}</h2>
                <Tracklist
                    tracks={props.playlistTracks}
                    onRemove={props.onRemove}
                    isRemoval={true}
                />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist; 

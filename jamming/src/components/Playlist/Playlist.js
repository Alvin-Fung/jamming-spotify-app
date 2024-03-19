import React, { useState } from 'react';
import Tracklist from '../TrackList/Tracklist';
import './Playlist.css';

function Playlist(props) {
    // console.log('Playlist ', props.playlistTracks);
    const playlistName = props.playlistName;
    const [isEditing, setEditing] = useState(false);
    return (
        <div className="Playlist">
            <div className='playlist-column'>
                {isEditing ? (
                    <input
                        type="text"
                        value={playlistName}
                        onChange={(e) => props.onPlaylistNameChange(e.target.value)}
                        onBlur={() => setEditing(false)}
                    />
                ) : (<h2 onClick={() => setEditing(true)}>{playlistName}</h2>
                )}
                <Tracklist
                    tracks={props.playlistTracks}
                    onRemove={props.onRemove}
                    isRemoval={true}
                />
                <button className="Playlist-save" onClick={props.onSave}>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist; 

import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <div className="TrackList">
            {props.tracks.map((track) => {
                <Track
                    track={track}
                    key={track.id}
                    onAdd={this.onAdd}
                />
            })}
        </div>
    );
}

export default Tracklist; 

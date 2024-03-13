import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    console.log();
    return (
        <div className="TrackList">
            {props.tracks && props.tracks.map((track) => (
                <Track
                    track={track}
                    key={track.id}
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                />
            ))}
        </div>
    );
}

export default Tracklist;

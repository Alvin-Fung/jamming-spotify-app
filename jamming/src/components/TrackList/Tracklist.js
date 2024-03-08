import React, { Component } from 'react';
import Track from '../Track/Track';

class TrackList extends Component {

    onAdd = (track) => {
        this.props.onAdd(track);
    }

    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track} key={track.id} onAdd={this.onAdd} />
                    })
                }
            </div>
        )
    }
}

export default TrackList; 

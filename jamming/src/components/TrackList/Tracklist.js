import React, { Component } from 'react';
import Track from './components/Track/Track';

class TrackList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Map through tracks and render Track components here*/}
                <Track />
                {/* Repeat here for each track*/}
            </div>
        )
    }
}

export default TrackList; 

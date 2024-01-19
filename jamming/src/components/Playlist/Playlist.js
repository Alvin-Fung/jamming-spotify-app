import React, { Component } from 'react';
import TrackList from './components/TrackList/TrackList';

class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>My Playist</h2>
                <TrackList />
            </div>
        )
    }
}

export default Playlist; 

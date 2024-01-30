import React, { Component } from 'react';

class Track extends Component {
    constructor(props) {
        super(props);
        //States and methods go here
    }

    render() {
        const { track } = this.props;

        return (
            <div>
                <p>ID: {track.id}</p>
                <p>Name: {track.name}</p>
                <p>Artist: {track.artist}</p>
                <p>Album: {track.album}</p>
            </div>
        );
    }
}

export default Track; 

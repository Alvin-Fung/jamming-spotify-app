import React, { Component } from 'react';

class Track extends Component {
    constructor(props) {
        super(props);
        //States and methods go here
    }

    render() {
        const { track } = this.props;

        return (
            <div className="Track">
                <div className="Track-information">
                    {/* <p>ID: {track.id}</p> */}
                    <h2>{track.name}</h2>
                    <p>
                        {track.artist} | {track.album}
                    </p>
                </div>
                <button className="Track-action" onClick={() => this.props.onAddTrack(this.props.track)}>+</button>
            </div>
        );
    }
}

export default Track; 

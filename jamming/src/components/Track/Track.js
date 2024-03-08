import React, { Component } from 'react';

class Track extends Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }

    // renderAction() {
    //     if (this.props.isRemoval) {
    //         return <button className="Track-action" onClick={this.removeTrack}>-</button>
    //     } else {
    //         return
    //     }
    // }

    addTrack() {
        this.props.onAdd(this.props.track);
    }


    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h2>{this.props.track.name}</h2>
                    <p>
                        {this.props.track.artist} | {this.props.track.album}
                    </p>
                </div>
                <button className="Track-action" onClick={this.addTrack}>+</button>
            </div>
        );
    }
}

export default Track; 

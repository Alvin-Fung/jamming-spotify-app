import React, { Component } from 'react';

function Track(props) {

    function renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={addTrack}>+</button>
        }
    }

    function addTrack() {
        props.onAdd(props.track);
    }

    function removeTrack() {
        props.onRemove(props.track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h2>{this.props.track.name}</h2>
                <p>
                    {this.props.track.artist} | {this.props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track; 

import React from 'react';

function Track(props) {

    function renderAction() {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>-</button>
            );
        } else {
            return (
                <button className="Track-action" onClick={passTrack}>+</button>
            );
        }
    }

    function passTrack() {
        props.onAdd(props.track);
    }

    function removeTrack() {
        props.onRemove(props.track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h2>{props.track.name}</h2>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track; 

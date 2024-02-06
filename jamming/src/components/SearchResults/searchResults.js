import React, { Component } from 'react';
import TrackList from '../TrackList/Tracklist';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Step 1: Create hardcoded array of track objects
            searchResults: [
                {
                    id: '1',
                    name: 'Shine On You Crazy Diamond, Pts. 1-5 ',
                    artist: 'Pink Floyd',
                    album: 'Wish You Were Here'
                },
                {
                    id: '2',
                    name: `I'm Not In Love`,
                    artist: '10cc',
                    album: 'The Original Soundtrack'
                }
            ]
        };
    }

    addTrackToPlaylist = (track) => {
        //???
        this.props.function(track); //Temporary placeholder
    }


    render() {
        // console.log('Search Results - searchResults:', this.state.searchResults);
        return (
            <div className="Search-Results">
                <h2>Results</h2>
                <TrackList searchResults={this.state.searchResults} onAdd={this.addTrackToPlaylist} />
                <button>Save to Spotify</button>
            </div>
        )
    }
}

export default SearchResults;

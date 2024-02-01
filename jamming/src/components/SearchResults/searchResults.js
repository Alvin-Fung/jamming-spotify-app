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
    render() {
        console.log('Search Results - searchResults:', this.state.searchResults);
        return (
            <div>
                <h2>Results</h2>
                <button>+</button>
                <TrackList searchResults={this.state.searchResults} />
            </div>
        )
    }
}

export default SearchResults;

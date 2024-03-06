import React, { Component } from 'react';
import TrackList from '../TrackList/Tracklist';
import './searchResults.css';
const jsonData = require('./searchresults.json');

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: jsonData.searchresults || [],
            playlist: [],
            message: '',
        };
    }

    containsTrack = (track, playlist) => {
        return playlist.some(existingTrack => existingTrack.id === track.id);
    }

    addTrackToPlaylist = (track) => {
        const updatedPlaylist = [...this.state.searchResults];

        if (!this.containsTrack(track, updatedPlaylist)) {
            this.setState({ playlistTracks: updatedPlaylist });
        } else {
            this.state.message = 'Song is already in the playlist!';
        }
    }

    render() {
        console.log('Search Results - searchResults:', this.state.searchResults);
        return (
            <div className="Search-Results">
                <div className='search-results-column'>
                    <h2>Results</h2>
                    {/* Use this.props.onAddTrack instead of this.addTrackToPlaylist */}
                    <TrackList searchResults={this.state.searchResults} onAdd={this.addTrackToPlaylist} />
                    <button onClick={() => this.props.onAddTrack(this.state.searchResults)}>Save to Spotify</button>
                </div>
            </div>
        );
    }
}

export default SearchResults;

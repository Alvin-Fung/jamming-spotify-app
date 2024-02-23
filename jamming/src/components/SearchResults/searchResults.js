import React, { Component, useState } from 'react';
import TrackList from '../TrackList/Tracklist';
import Playlist from '../Playlist/Playlist';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Step 1: Create hardcoded array of track objects
            searchResults: [
                {
                    id: '3',
                    name: 'Plastic Love',
                    artist: 'Mariya Takeuchi',
                    album: 'Expressions'
                },
                {
                    id: '4',
                    name: `Epitaph`,
                    artist: 'King Crimson',
                    album: 'In The Court Of The Crimson King'
                }
            ],
            playlist: [],
            message: '',
        };
    }

    containsTrack = (track, playlist) => {
        return playlist.some(existingTrack => existingTrack.id === track.id);
    }

    addTrackToPlaylist = (track) => {
        //Call function from parent component
        //Need some sort of conditional statement here to check if the track is already within the play list
        const updatedPlaylist = Array.isArray(this.state.playlist) ? [...this.state.playlist] : [];

        if (this.containsTrack(track, updatedPlaylist)) {
            this.setState({ message: 'Song is already in the playlist!' });
        } else {
            updatedPlaylist.push(track);
            this.setState({ playlist: updatedPlaylist, message: 'Song has been added to playlist!' });
            console.log('Updated Plalist:', updatedPlaylist);
        }
    }


    render() {
        console.log('Search Results - searchResults:', this.state.searchResults);
        return (
            <div className="Search-Results">
                <h2>Results</h2>
                <TrackList searchResults={this.state.searchResults} onAdd={this.addTrackToPlaylist} />
                <button onClick={() => this.addTrackToPlaylist(this.state.searchResults)}>Save to Spotify</button>
            </div>
        )
    }
}

export default SearchResults;

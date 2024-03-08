import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "My Playlist",
      playlistTracks: []
    };
    this.onAdd = this.addTrack.bind(this);
  }

  addTrack = (track) => {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">
          <h1>Jamming</h1>
          <SearchBar />
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
          />
        </header>
      </div>
    );
  }
}


export default App;

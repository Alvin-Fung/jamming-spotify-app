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
    }

  }

  render() {
    // console.log('playlistName:', this.props.playlistName);
    // console.log('playlistTracks:', this.props.playlistTracks);
    // console.log('searchResults:', this.props.searchResults);
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Jamming</h1>
          <SearchBar />
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist
            playlistName={this.props.playlistName}
            playlistTracks={this.props.playlistTracks}
            searchResults={this.props.searchResults}
          />
        </header>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('playlistName:', this.state.playlistName);
    console.log('playlistTracks:', this.state.playlistTracks);
    console.log('searchResults:', this.state.searchResults);
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Jamming</h1>
          <SearchBar />
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            searchResults={this.state.searchResults}
          />
        </header>
      </div>
    );
  }
}


export default App;

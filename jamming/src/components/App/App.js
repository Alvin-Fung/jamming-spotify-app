import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Step 1: Create hardcoded array of track objects
      searchResults: [
        { id: '1', name: 'Shine On You Crazy Diamond, Pts. 1-5 ', artist: 'Pink Floyd', album: 'Wish You Were Here' },
        { id: '2', name: `I'm Not In Love`, artist: '10cc', album: 'The Original Soundtrack' }
      ]
    };
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

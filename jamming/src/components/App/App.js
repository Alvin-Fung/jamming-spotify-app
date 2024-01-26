import React, { useState } from 'react';

import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  //Step 1: Create hardcoded array of track objects
  const hardCodedTracks = [
    { id: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar />
        <SearchResults />
        <Playlist />
      </header>
    </div>
  );
}

export default App;

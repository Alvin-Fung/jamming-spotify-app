import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 4,
      name: "Plastic Love",
      artist: "Mariya Takeuchi",
      album: "Expressions"
    },
    {
      id: 5,
      name: "Epitaph",
      artist: "King Crimson",
      album: "In The Court Of The Crimson King"
    }
  ]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 1,
      name: "Shine On You Crazy Diamond, PTs. 5-6",
      artist: "Pink Floyd",
      album: "Wish you Were Here"
    },
  ]);


  function addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar />
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
        />
      </header>
    </div>
  );
}


export default App;

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

  //This function doesn't serve it's proper purpose due to strcuture being changed now
  function addTrack(track) {
    let existingTracks = playlistTracks.some((t) => t.id === track.id);
    let newTrack = playlistTracks.track;
    if (existingTracks) {
      console.log("Song is already in the playlist!");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  // function removeTrack(track) {
  //   const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
  //   setPlaylistTracks(existingTrack);
  // }
  console.log('App playlist display', playlistTracks);
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

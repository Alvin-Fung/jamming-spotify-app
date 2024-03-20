import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Plastic Love",
      artist: "Mariya Takeuchi",
      album: "Expressions"
    },
    {
      id: 2,
      name: "Epitaph",
      artist: "King Crimson",
      album: "In The Court Of The Crimson King"
    },
    {
      id: 3,
      name: "Shine On You Crazy Diamond, PTs. 5-6",
      artist: "Pink Floyd",
      album: "Wish you Were Here"
    }
  ]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 3,
      name: "Shine On You Crazy Diamond, PTs. 5-6",
      artist: "Pink Floyd",
      album: "Wish you Were Here"
    },
  ]);

  //Reworked function 
  function addTrack(track) {
    let isTrackInPlaylist = playlistTracks.some((t) => t.id === track.id);

    if (isTrackInPlaylist) {
      alert("Song is already in the playlist!");
    } else {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }


  function savePlaylist() {
    const mockURI = playlistTracks.map(track => track.uri);
    console.log('Tracks:', mockURI);
    setPlaylistTracks([]);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
    console.log('Playlist name: ', name);
  }

  // console.log('App playlist display', playlistTracks);
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar />
        <div className="Column-container">
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
            onNameChange={setPlaylistName}
          />
        </div>
      </header>
    </div>
  );
}


export default App;

import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';
import { Spotify } from '../../util/Spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      uri: "spotify:track:7rU6Iebxzlvqy5t857bKFq?si=ee48499d590d489b",
      name: "Plastic Love",
      artist: "Mariya Takeuchi",
      album: "Expressions"
    },
    {
      id: 2,
      uri: "spotify:track:4rEle6gif1VERA41tjOTIq?si=9def392c06464488",
      name: "Epitaph",
      artist: "King Crimson",
      album: "In The Court Of The Crimson King"
    },
    {
      id: 3,
      uri: "spotify:track:6pnwfWyaWjQiHCKTiZLItr?si=afed9f6a580c4571",
      name: "Shine On You Crazy Diamond, PTs. 5-6",
      artist: "Pink Floyd",
      album: "Wish you Were Here"
    }
  ]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 3,
      uri: "spotify:track:6pnwfWyaWjQiHCKTiZLItr?si=afed9f6a580c4571",
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

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      updatePlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }

  function searchTracks(term) {
    Spotify.search(term).then((result) => (setSearchResults(result)));
    console.log(term);
  }

  // console.log('App playlist display', playlistTracks);
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar onSearch={searchTracks} />
        <div className="Column-container">
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
            onNameChange={updatePlaylistName}
          />
        </div>
      </header>
    </div>
  );
}


export default App;

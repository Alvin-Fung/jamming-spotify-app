import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';
import { Spotify } from '../../util/Spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

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

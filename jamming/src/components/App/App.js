import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          "id": 4,
          "name": "Plastic Love",
          "artist": "Mariya Takeuchi",
          "album": "Expressions"
        },
        {
          "id": 5,
          "name": "Epitaph",
          "artist": "King Crimson",
          "album": "In The Court Of The Crimson King"
        }
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        {
          "id": 1,
          "name": "Shine On You Crazy Diamond, Pts. 5-6",
          "artist": "Pink Floyd",
          "album": "Wish You Were Here"
        },
        {
          "id": 2,
          "name": "Dance The Night Away",
          "artist": "Cream",
          "album": "Disraeli Gears"
        },
        {
          "id": 3,
          "name": "Early Summer",
          "artist": "Ryo Fukui",
          "album": "Scenery"
        }
      ]
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

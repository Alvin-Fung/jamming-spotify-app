import './App/App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
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

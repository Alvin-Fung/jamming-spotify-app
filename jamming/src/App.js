import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import SearchResults from './components/SearchResults/searchResults';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar />
        <SearchResults />
      </header>
    </div>
  );
}

export default App;

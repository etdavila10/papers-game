import './App.css';
import Call from './Call';

function App() {
  return (
    <div className="App App-header">
      <h1>Welcome to arXiv Playground</h1>
      <div className="search-bar">
        <h2>Search for some ArXiv Articles:</h2>
        <p>Change url in 'Call.js' to change query for time being</p>
        {/* <input type="text"></input> */}
      </div>
      <Call />
    </div>
  );
}

export default App;

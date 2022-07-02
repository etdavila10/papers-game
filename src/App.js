import './App.css';
import CallArXiv from './CallArXiv';   // Use this only to call arxiv api
import QueryForm from "./QueryForm";   // Use this only for form purposes
// import Article from "./Article";       // Use this only for displaying articles

// Since this App's only purpose is to make arxiv calls and display results
// it makes sense for all other components to pass state up to here
// and then this will pass state back down to the other necessary components
function App() {
  return (
    <div className="App App-header">
      <h1>Welcome to arXiv Playground</h1>
      <div className="search-bar">
        <h2>Search for some ArXiv Articles:</h2>
        <p>Change url in 'Call.js' to change query for time being</p>
        <QueryForm />
      </div>
      <CallArXiv />
    </div>
  );
}

export default App;

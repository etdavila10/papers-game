import './App.css';
import Call from './Call';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to arXiv Playground</h1>
        <div>
          What type of activity would you like to do?:
          <br></br>
          <input></input>
        </div>
        <Call />
      </header>
    </div>
  );
}

export default App;

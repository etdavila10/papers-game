import Article from "./Article";

// Either display loading screen or the articles
// Three possible Display states
// 1. Game has not started / ask person if they want to start the game
// 2. Once player has selected to start the game we begin loading the game
// 3. after loading is complete we want to display two articles
const Display = (props) => {
  if (!props.gameInProgress) {
    return (
      <div>
        <h1>Welcome to arXiv Page Counter</h1>
        <button onClick={props.beginGame}>Start a new game?</button>
      </div>
    )
  }
  if (props.isLoading) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <div>
        <h1>Which one has more pages?</h1>
        <Article value={props.article1} />
        <Article value={props.article2} />
      </div>
    );
  }
};

export default Display;
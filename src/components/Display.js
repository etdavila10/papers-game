import Article from "./Article";

// Either display loading screen or the articles
// Three possible Display states
// 1. Game has not started / ask person if they want to start the game
// 2. Once player has selected to start the game we begin loading the game
// 3. after loading is complete we want to display two articles
// 4. Clicking the correct article!
// 5. Losing the game
const Display = (props) => {
  if (!props.gameInProgress) {
    return (
      <div className="content">
        <h1>Welcome to the ArXiv Game!</h1>
        <button onClick={props.beginGame}>Start a new game?</button>
        <h2>
          By{" "}
          <a href="https://sites.google.com/umn.edu/aaronli" class="link">
            Aaron Li
          </a>{" "}
          and{" "}
          <a href="https://etdavila10.github.io/" class="link">
            Eduardo Torres Dávila
          </a>
        </h2>
      </div>
    );
  }
  if (!props.isLoading) {
    return (
      <>
        <h1>Which paper was submitted to the ArXiv more recently?</h1>
        <div id="scores">
          <div id="curr-score">Current Score = {props.currScore}</div>
          <div id="best-score">Best Score = {props.bestScore}</div>
        </div>
        <div className="article-containers">
          <Article onClick={props.article1Click} value={props.article1} />
          <Article onClick={props.article2Click} value={props.article2} />
        </div>
      </>
    );
  }
};

export default Display;

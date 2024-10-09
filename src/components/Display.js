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
      <div className="flex-col flex items-center justify-center pt-24">
        <h1 className="text-2xl mb-6 font-bold">Welcome to the papers game!</h1>
        <button className="mb-6 p-3 rounded-xl bg-white text-black hover:underline" onClick={props.beginGame}>Start a game</button>
        <h3>
          By{" "}
          <a href="https://sites.google.com/umn.edu/aaronli" className="underline hover:text-pink-200">
            Aaron Li
          </a>{" "}
          and{" "}
          <a href="https://etdavila10.github.io/" className="underline hover:text-pink-200">
            Eduardo Torres Dávila
          </a>
        </h3>
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
  } else {
    return (
      <div className="flex justify-center items-center pt-24 font-bold text-2xl">
        <div className="w-9 h-9 border-8 rounded-full border-t-blue-300 animate-spin"></div>
        <h1 className="ml-3">Loading Articles</h1>
      </div>
    )
  }
};

export default Display;

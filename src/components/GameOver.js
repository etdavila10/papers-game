
const GameOver = (props) => {
  return (
    <div className="content">
      <h1>Game Over!</h1>
      { props.currScore > props.bestScore 
        ? <div><div id = "emphasis">New Best!</div> <div id = "scores">Your Score: {props.currScore}</div> </div>
        : <div><div id = "scores" >Best Score: {props.bestScore}</div><div id = "scores">Your Score: {props.currScore}</div></div>}
      <button onClick={props.beginGame}>Start a new game?</button>
      <a href={props.newArticle.id["_text"]}><h2>The newer article was: {props.newArticle.title["_text"]}</h2></a>
      <a href={props.oldArticle.id["_text"]}><h2>The older article was: {props.oldArticle.title["_text"]}</h2></a>
    </div>
  )
};

export default GameOver;
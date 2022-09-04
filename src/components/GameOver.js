
const GameOver = (props) => {
  return (
    <div className="content">
      <h1>Game Over!</h1>
      { props.currScore > props.bestScore 
        ? <div><div id = "emphasis">New Best!</div> <div id = "scores">Your Score: {props.currScore}</div> </div>
        : <div><div id = "scores" >Best Score: {props.bestScore}</div><div id = "scores">Your Score: {props.currScore}</div></div>}
      <button onClick={props.beginGame}>Start a new game?</button>
    </div>
  )
};

export default GameOver;

const GameOver = (props) => {
  return (
    <div>
      <h1>You Lost. Game Over!</h1>
      { props.currScore > props.bestScore 
        ? <div><div id = "emphasis">New Best!</div> <div>Your Score: {props.currScore}</div> </div>
        : <div><div>Best Score: {props.bestScore}</div><div>Your Score: {props.currScore}</div></div>}
      <button onClick={props.beginGame}>Start a new game?</button>
    </div>
  )
};

export default GameOver;
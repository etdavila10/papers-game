
const GameOver = (props) => {
  return (
    <div>
      <h1>You Lost. Game Over!</h1>
      { props.currScore > props.bestScore 
        ? <div><div>Your Score: {props.currScore}</div> <div>New Best!</div> </div>
        : <div><div>Your Score: {props.currScore}</div><div>Best Score: {props.bestScore}</div></div>}
      <button onClick={props.beginGame}>Start a new game?</button>
    </div>
  )
};

export default GameOver;
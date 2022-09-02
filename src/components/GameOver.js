
const GameOver = (props) => {
  return (
    <div>
      <h1>Game Over. You Suck.</h1>
      <div>Score = {props.currScore}</div>
      <button onClick={props.beginGame}>Start a new game?</button>
    </div>
  )
};

export default GameOver;
const Transition = (props) => {
  return (
    <div>
      <h1 id="correct">Correct!</h1>
      <div id="scores">
        <div id="curr-score">Current Score = {props.currScore}</div>
        <div id="best-score">Best Score = {props.bestScore}</div>
      </div>
      <div  className="article-containers">
        <div  className={props.newerArticle === 1 ? "article-entry new" : "article-entry"} onClick={() => {props.openArticle(props.article1.id)}} >
          <h2>Title: {props.article1.title}</h2>
          <h2>Date: {props.article1.published.substring(0,10)}</h2>
        </div>
        <div className={props.newerArticle === 1 ? "article-entry" : "article-entry new"} onClick={() => {props.openArticle(props.article2.id)}}>
          <h2>Title: {props.article2.title}</h2>
          <h2>Date: {props.article2.published.substring(0,10)}</h2>
        </div>
      </div>
      <button onClick={props.beginGame}>Continue...</button>
    </div>
  );
};

export default Transition;
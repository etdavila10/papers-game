
const Transition = (props) => {
  return (
    <div>
      <div className="article-containers">
        <div className="article-entry">
          <h1>Article 1 title: {props.article1.title["_text"]}</h1>
        </div>
        <div className="article-entry">
          <h1>Article 2 title: {props.article2.title["_text"]}</h1>
        </div>
      </div>
      <button onClick={props.beginGame}>Continue...</button>
    </div>
  );
};

export default Transition;
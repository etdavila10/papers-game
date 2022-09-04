const Latex = require('react-latex')

const Article = (props) => {
  const entry = props.value;
  const title = entry.title["_text"];
  const abstract = entry.summary["_text"];
  let authors = [];

  for (let i = 0; i < entry.author.length; i++) {
    authors.push(entry.author[i].name["_text"]);
  }
  if (authors.length === 0) {
    authors = [entry.author.name["_text"]];
  }

  return (
    <div onClick={props.onClick} className={"article-entry"}>
      <h1 className={"article-title"}><Latex>{ title }</Latex></h1>
      <ul className={"authors"}>
        {authors.map((name, index) => {
          if (index === 0) {
            return <li className={"author-name"} key={index}>{ name }</li>;
          } else {
            return <li className={"author-name"} key={index}> / { name }</li>;
          }
        })}
      </ul>
      <p className={"abstract"}><Latex>{ abstract }</Latex></p>
    </div>
  );
};

export default Article;
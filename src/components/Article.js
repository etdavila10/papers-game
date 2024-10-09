const Latex = require('react-latex')

const Article = (props) => {
  const entry = props.value;
  const articleNum= props.articleNum;
  const cutoff = 400;
  const title = entry.title;

  const handleReadMore = () => {
    let dots = document.getElementById(`dots-${articleNum}`);
    let moreSpan = document.getElementById(`more-${articleNum}`);
    let btn = document.getElementById(`expandBtn-${articleNum}`);
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Read more";
      moreSpan.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Read less";
      moreSpan.style.display = "inline";
    }
  }

  let abstractBeginning = null;
  let abstractEnd = null;
  let abstract = null;

  if (entry.summary.length >= cutoff) {
    abstractBeginning = entry.summary.substring(0, cutoff);
    abstractEnd = entry.summary.substring(cutoff);
  } else {
    abstract = entry.summary;
  }
  let authors = [];

  for (let i = 0; i < entry.author.length; i++) {
    authors.push(entry.author[i].name);
  }
  if (authors.length === 0) {
    authors = [entry.author.name];
  }

  return (
    <div className="transition-all duration-500 bg-white text-black rounded-xl p-6 m-3">
      <h1 className="mb-3"><Latex>{ title }</Latex></h1>
      <ul className="mb-3">
        {authors.map((name, index) => {
          if (index === 0) {
            return <li className="inline" key={index}>{ name }</li>;
          } else {
            return <li className="inline" key={index}> / { name }</li>;
          }
        })}
      </ul>
      {abstractBeginning && (
        <div >
          <p className="text-md"><Latex>{ abstractBeginning }</Latex>
            <span id={`dots-${articleNum}`}>...</span>
            <span className="hidden" id={`more-${articleNum}`}><Latex>{ abstractEnd }</Latex></span>
          </p>
          <button id={`expandBtn-${articleNum}`} onClick={handleReadMore} className="bg-gray-600 text-white py-1 px-2 mt-2 rounded-lg">Read more</button>
        </div>
      )}
      {abstract && (
        <p className="text-lg"><Latex>{ abstract }</Latex></p>
      )}
    </div>
  );
};

export default Article;

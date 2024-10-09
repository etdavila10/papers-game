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
  let noBottom = '';

  if (entry.summary.length > cutoff) {
    noBottom = 'rounded-b-none';
    abstractBeginning = entry.summary.substring(0, cutoff);
    let numOfDollars = abstractBeginning.match(/\$/g);
    // Just in case cutoff split in the middle of math mode
    if (numOfDollars && numOfDollars.length % 2 !== 0) {
      let nextDollar = entry.summary.indexOf('$', cutoff);
      abstractBeginning = entry.summary.substring(0, nextDollar + 1);
      abstractEnd = entry.summary.substring(nextDollar + 1);
    } else {
      abstractEnd = entry.summary.substring(cutoff);
    }
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
    <div className="m-3">
      <div onClick={props.onClick} className={`bg-white text-black rounded-xl p-6 pb-3 mb-0 hover:bg-green-50 hover:cursor-pointer ${noBottom}`}>
        <h1 className="text-xl"><Latex>{ title }</Latex></h1>
        <hr className="mt-3 border-t-2"></hr>
        <ul className="">
          {authors.map((name, index) => {
            if (index === 0) {
              return <li className="inline text-gray-500" key={index}>{ name }</li>;
            } else {
              return <li className="inline text-gray-500" key={index}>, { name }</li>;
            }
          })}
        </ul>
        <hr className="mb-3 border-t-2"></hr>
        {abstractBeginning && (
          <div>
            <p className="text-md"><Latex>{ abstractBeginning }</Latex>
              <span id={`dots-${articleNum}`}>...</span>
              <span className="hidden" id={`more-${articleNum}`}><Latex>{ abstractEnd }</Latex></span>
            </p>
          </div>
        )}
        {abstract && (
          <p className="text-lg pb-3"><Latex>{ abstract }</Latex></p>
        )}
      </div>
      {abstractBeginning && (
        <div className="w-full">
          <button id={`expandBtn-${articleNum}`} onClick={handleReadMore} className="bg-gray-600 text-white py-3 px-3 rounded-xl hover:bg-gray-500 rounded-t-none w-full">Read more</button>
        </div>
      )}
    </div>
  );
};

export default Article;

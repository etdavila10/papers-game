const Transition = (props) => {
  const article1Date = new Date(props.article1.published);
  const article2Date = new Date(props.article2.published);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="flex flex-col items-center bg-gray-800 pt-12">
      <h1 className="text-2xl mb-6 font-bold sm:text-4xl">Correct</h1>
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold sm:text-2xl">Score: {props.currScore}</div>
        <div className="mb-3 text-xl font-bold sm:text-2xl">Best Score: {props.bestScore}</div>
      </div>
      <div className="flex flex-col sm:m-6 sm:gap-3">
        <div className="m-3">
          <div className={`rounded-t-xl p-6 mb-0 ${props.newerArticle === 1 ? "bg-green-200 text-black" : "bg-white text-black"}`}>
            <h2 className="text-xl sm:text-2xl">{props.article1.title}</h2>
            <hr className={`my-3 border-t-2 ${props.newerArticle === 1 ? "border-black" : ""}`}></hr>
            <h2 className="sm:text-lg">{article1Date.toLocaleDateString('en-US', options)}</h2>
          </div>
          <div className="w-full">
            <a href={props.article1.id} target="_blank" rel="noreferrer" className="bg-gray-600 text-white py-3 px-6 rounded-xl hover:bg-gray-500 rounded-t-none w-full block text-center">arXiv page</a>
          </div>
        </div>
        <div className="m-3">
          <div className={`rounded-t-xl p-6 mb-0 ${props.newerArticle === 2 ? "bg-green-200 text-black" : "bg-white text-black"}`}>
            <h2 className="text-xl sm:text-2xl">{props.article2.title}</h2>
            <hr className={`my-3 border-t-2 ${props.newerArticle === 2 ? "border-black" : ""}`}></hr>
            <h2 className="sm:text-lg">{article2Date.toLocaleDateString('en-US', options)}</h2>
          </div>
          <div className="w-full">
            <a href={props.article2.id} target="_blank" rel="noreferrer" className="bg-gray-600 text-white py-3 px-6 rounded-xl hover:bg-gray-500 rounded-t-none w-full block text-center">arXiv page</a>
          </div>
        </div>
      </div>
      <button className="mt-3 mb-6 py-3 px-6 text-xl rounded-full bg-white text-black hover:underline sm:text-2xl sm:mt-0" onClick={props.beginGame}>Continue</button>
    </div>
  )
};

export default Transition;
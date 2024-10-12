
const GameOver = (props) => {
  const article1Date = new Date(props.article1.published);
  const article2Date = new Date(props.article2.published);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="flex flex-col items-center bg-gray-800 pt-12">
      <h1 className="text-2xl mb-6 font-bold sm:text-4xl">Game Over</h1>
      { props.currScore > props.bestScore
        ? (
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-green-300 sm:text-2xl">New Best!</div>
            <div className="mb-3 text-xl font-bold sm:text-2xl">Score: {props.currScore}</div>
          </div>
        )
        : (
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold sm:text-2xl">Best Score: {props.bestScore}</div>
            <div className="mb-3 text-xl font-bold sm:text-2xl">Score: {props.currScore}</div>
          </div>
        )
      }

      <div className="flex flex-col sm:m-6 sm:gap-3 md:flex-row w-full p-3">
        <div className="w-full md:w-1/2">
          <div className={`rounded-t-xl p-6 mb-0 ${props.newerArticle === 2 ? "bg-red-400" : "bg-white text-black"}`}>
            <h2 className="text-xl sm:text-2xl md:text-xl article-title">{props.article1.title}</h2>
            <hr className="my-3 border-t-2"></hr>
            <h2 className="sm:text-lg">{article1Date.toLocaleDateString('en-US', options)}</h2>
          </div>
          <div className="w-full">
            <a href={props.article1.id} target="_blank" rel="noopener noreferrer" className="bg-gray-600 text-white py-3 px-6 rounded-xl hover:bg-gray-500 rounded-t-none w-full block text-center">arXiv page</a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className={`rounded-t-xl p-6 mb-0 ${props.newerArticle === 1 ? "bg-red-400" : "bg-white text-black"}`}>
            <h2 className="text-xl sm:text-2xl md:text-xl article-title">{props.article2.title}</h2>
            <hr className="my-3 border-t-2"></hr>
            <h2 className="sm:text-lg">{article2Date.toLocaleDateString('en-US', options)}</h2>
          </div>
          <div className="w-full">
            <a href={props.article2.id} target="_blank" rel="noopener noreferrer" className="bg-gray-600 text-white py-3 px-6 rounded-xl hover:bg-gray-500 rounded-t-none w-full block text-center">arXiv page</a>
          </div>
        </div>
      </div>
      <button className="mt-3 mb-6 py-3 px-6 text-lg rounded-full bg-white text-black hover:underline sm:text-2xl sm:mt-0" onClick={props.beginGame}>New game</button>
    </div>
  )
};

export default GameOver;
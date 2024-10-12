import { useState } from "react";
import Article from "./Article";

// Either display loading screen or the articles
// Three possible Display states
// 1. Game has not started / ask person if they want to start the game
// 2. Once player has selected to start the game we begin loading the game
// 3. after loading is complete we want to display two articles
// 4. Clicking the correct article!
// 5. Losing the game
const Display = (props) => {
  const [readMoreClicked, setReadMoreClicked] = useState(false);
  const cutoff = 400;
  let expandable = null;
  if (Object.keys(props.article1).length !== 0) {
    const abs1 = props.article1.summary;
    const abs2 = props.article2.summary;
    expandable = abs1.length > cutoff || abs2.length > cutoff;
  }

  const handleReadMore = () => {
    let dots = document.querySelectorAll(".dots");
    let moreSpan = document.querySelectorAll(".extra");
    let btn = document.getElementById("global-more-btn");

    // This means the button has already been
    // clicked so the abstract should be expanded
    if (readMoreClicked) {
      dots.forEach((dot) => {dot.style.display = "inline";});
      moreSpan.forEach((more) => {more.style.display="none";});
      btn.innerHTML = "Read more";
    } else {
      dots.forEach((dot) => {dot.style.display = "hidden";});
      moreSpan.forEach((more) => {more.style.display="inline";});
      btn.innerHTML = "Read less";
    }

    setReadMoreClicked(!readMoreClicked);
  }

  if (!props.gameInProgress) {
    return (
      <div className="flex-col flex items-center justify-center h-screen">
        <h1 className="text-2xl mb-12 font-bold sm:text-4xl">Welcome to the papers game!</h1>
        <button className="mb-12 py-3 px-6 text-xl rounded-full bg-white text-black hover:underline sm:text-2xl" onClick={props.beginGame}>Start game</button>
        <h3 className="text-lg sm:text-xl">
          By{" "}
          <a href="https://sites.google.com/umn.edu/aaronli" className="underline hover:text-pink-200">
            Aaron Li
          </a>{" "}
          and{" "}
          <a href="https://etdavila10.github.io/" className="underline hover:text-pink-200">
            Eduardo Torres Dávila
          </a>
        </h3>
      </div>
    );
  }
  if (!props.isLoading) {
    return (
      <div className="bg-gray-800">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl pt-12 mb-6 sm:text-4xl">Which is the latest paper?</h1>
          <div className="mb-3 text-xl font-bold sm:text-2xl">Score: {props.currScore}</div>
          <div className="flex flex-col sm:m-6 sm:gap-3 md:flex-row">
            <Article readMoreClicked={readMoreClicked} articleNum="1" onClick={props.article1Click} value={props.article1} />
            <Article readMoreClicked={readMoreClicked} articleNum="2" onClick={props.article2Click} value={props.article2} />
          </div>
          {expandable && (
            <button id="global-more-btn" className="mt-3 mb-6 py-3 px-6 text-xl rounded-full bg-white text-black hover:underline sm:text-2xl sm:mt-0 md:block hidden" onClick={handleReadMore}>Read more</button>
          )}
        </div>
        <div className="ml-3 pb-12 text-xl font-bold sm:text-2xl sm:ml-9">High Score: {props.bestScore}</div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center pt-24 font-bold text-2xl">
        <div className="w-9 h-9 border-8 rounded-full border-t-blue-300 animate-spin"></div>
        <h1 className="ml-3">Loading Articles</h1>
      </div>
    )
  }
};

export default Display;

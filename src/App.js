import { useState, useEffect } from 'react';

import Display from "./components/Display";
import GameOver from "./components/GameOver";
import Transition from "./components/Transition";
import getArticles from './services/arxiv';

const App = () => {

  // state of variables we need to keep track of
  const [article1, setArticle1] = useState({});
  const [article2, setArticle2] = useState({});
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [newerArticle, setNewerArticle] = useState(0);

  // update title height of articles h1 tag
  // so that they are even
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const titles = document.querySelectorAll('.article-title');
      const tHeights = Array.from(titles).map(title => title.offsetHeight);

      const authors = document.querySelectorAll('.authors');
      const aHeights = Array.from(authors).map(author => author.offsetHeight);

      const tMaxHeight = Math.max(...tHeights);
      const aMaxHeight = Math.max(...aHeights);

      for (let title of titles) {
        title.style.height = `${tMaxHeight}px`;
      }

      for (let author of authors) {
        author.style.height = `${aMaxHeight}px`;
      }
    }
  }, [loadingArticles, gameOver, correctAnswer])

  // player has pressed the beginGame button
  const beginGame = () => {
    if (gameOver) {
      if (currScore > bestScore) {
        setBestScore(currScore)
      }
      setCurrScore(0)
    }
    setCorrectAnswer(false);
    setGameOver(false)
    setGameInProgress(true);
    setLoadingArticles(true);
    generateArticles()
  }

  const article1Click = () => {
    if (newerArticle === 1){
      setCurrScore(currScore + 1)
      setCorrectAnswer(true);
      // console.log('You won! score: ', currScore + 1)
      // beginGame()
    }
    else {
      // console.log('You lost')
      setGameOver(true)
    }
  }

  const article2Click = () => {
    if (newerArticle === 2){
      setCurrScore(currScore + 1)
      setCorrectAnswer(true);
      // console.log('You won! score: ', currScore + 1)
      // beginGame()
    }
    else {
      // console.log('You lost')
      setGameOver(true)
    }
  }

  // generate first article
  const generateArticles = () => {
    getArticles()
      .then(result => {
          console.log('articles returned:');
          console.log(result);
          setArticle1(result[0]);
          setArticle2(result[1]);
          const date1 = new Date(result[0].published);
          const date2 = new Date(result[1].published);
          if (date1 < date2){
              setNewerArticle(2)
          }
          else {
              setNewerArticle(1)
          }
          setLoadingArticles(false);
      })
      .catch(error => console.log(error))
  }

  const openArticle = url => {
    window.open(url)
  }

  // Main App
  if (correctAnswer) {
    return (
      <div className="App">
        <Transition
          beginGame={beginGame}
          openArticle={openArticle}
          article1={article1}
          article2={article2}
          currScore={currScore}
          bestScore={bestScore}
          newerArticle={newerArticle}
        />
      </div>
    )
  }
  if (gameOver) {
    return (
      <div className="App">
        <GameOver
          currScore={currScore}
          beginGame={beginGame}
          openArticle={openArticle}
          bestScore={bestScore}
          article1={article1}
          article2={article2}
          newerArticle={newerArticle}
        />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Display
          beginGame={beginGame}
          gameInProgress={gameInProgress}
          isLoading={loadingArticles}
          article1={article1}
          article2={article2}
          article1Click={article1Click}
          article2Click={article2Click}
          currScore={currScore}
          bestScore={bestScore}
          correctAnswer={correctAnswer}
        />
      </div>
    )
  }
};

export default App;

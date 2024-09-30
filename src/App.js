import { useState } from 'react';

import Display from "./components/Display";
import GameOver from "./components/GameOver";
import Transition from "./components/Transition";
import getArticles from './services/arxiv';

const App = () => {

  // state of variables we need to keep track of
  const [article1, setArticle1] = useState({});
  const [article2, setArticle2] = useState({});
  const [loadArticles, setLoadArticles] = useState(true);
  const [oneIsLoading, setOneIsLoading] = useState(false);
  const [twoIsLoading, setTwoIsLoading] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [newerArticle, setNewerArticle] = useState(0);

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
  }

  const article1Click = () => {
    if (newerArticle === 1){
      setCurrScore(currScore + 1)
      setCorrectAnswer(true);
      // console.log('You won! score: ', currScore + 1)
      // beginGame()
      setLoadArticles(true);
      setOneIsLoading(true);
      setTwoIsLoading(true);
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
      setLoadArticles(true);
      setOneIsLoading(true);
      setTwoIsLoading(true);
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
          setOneIsLoading(false);
          setTwoIsLoading(false);
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
    if (loadArticles) {
      console.log('loading articles')
      generateArticles()
      setLoadArticles(false)
    }
    return (
      <div className="App">
        <Display
          beginGame={beginGame}
          gameInProgress={gameInProgress}
          isLoading={oneIsLoading || twoIsLoading}
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

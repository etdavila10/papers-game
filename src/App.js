import { useState } from 'react';

import Display from "./components/Display";
import GameOver from "./components/GameOver";
import Transition from "./components/Transition";
import getArticle from './services/arxiv';

let newerArticle = 0
let article1Date = 0
let article2Date = 0

const App = () => {
  // helper function to generate a random ID
  // based on arXiv ID format
  const generateRandomArxivId = () => {
    const today = new Date();
    const year = (today.getFullYear() % 2000);
    const randomMonth = Math.floor(Math.random() * (12 + 1 - 1) + 1)
      .toString()
      .padStart(2, '0');
    const randomYear = Math.floor(Math.random() * (year - 8) + 8)
      .toString()
      .padStart(2, '0');

    const randomID = Math.floor(Math.random() * (2000 - 1) + 1)
      .toString()
      .padStart(5, '0');

    return `${randomYear}${randomMonth}.${randomID}`;
  };

  // state of variables we need to keep track of
  const [article1, setArticle1] = useState({});
  const [article2, setArticle2] = useState({});
  const [oneIsLoading, setOneIsLoading] = useState(false);
  const [twoIsLoading, setTwoIsLoading] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

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
    setOneIsLoading(true);
    setTwoIsLoading(true);
    setGameInProgress(true);
    article1Date = generateArticle1();
    article2Date = generateArticle2();
    if (article1Date < article2Date){
        newerArticle = 2
    }
    else {
        newerArticle = 1
    }
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
  const generateArticle1 = () => {
    const articleId = generateRandomArxivId();
    getArticle(articleId)
      .then(result => {
          let convert = require('xml-js');
          let resultJson = convert.xml2js(result, {compact: true, spaces: 4}).feed.entry;
          console.log('ID that gave article below: ', articleId);
          console.log(resultJson);
          setArticle1(resultJson);
          setOneIsLoading(false);
      })
      .catch(error => console.log(error))
    return articleId
  }

  // generate second article
  const generateArticle2 = () => {
    const articleId = generateRandomArxivId();
    getArticle(articleId)
      .then(result => {
          let convert = require('xml-js');
          let resultJson = convert.xml2js(result, {compact: true, spaces: 4}).feed.entry;
          console.log('ID that gave article below: ', articleId);
          console.log(resultJson);
          setArticle2(resultJson);
          setTwoIsLoading(false);
      })
      .catch(error => console.log(error))
    return articleId
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
          bestScore={bestScore}
          newArticle={newerArticle === 1 ? article1 : article2}
          oldArticle={newerArticle === 1 ? article2 : article1}
        />
      </div>
    )
  } else {
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

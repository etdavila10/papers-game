import { useState } from 'react';

import Display from "./components/Display";
import getArticle from './services/arxiv';

let newerArticle = 0
let article1Date = 0
let article2Date = 0
let currScore = 0

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

  // state of variables I need to keep track of
  const [article1, setArticle1] = useState({});
  const [article2, setArticle2] = useState({});
  const [oneIsLoading, setOneIsLoading] = useState(false);
  const [twoIsLoading, setTwoIsLoading] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  // const [numCorrect, setNumCorrect] = useState(0);

  // player has pressed the beginGame button
  const beginGame = () => {
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
    console.log('article 1 clicked');
    console.log(article1Date)
    if (newerArticle === 1){
      currScore++
      console.log('You won! score: ', currScore)

    }
    else {
      currScore = 0
      console.log('You lost')
    }
    beginGame()
  }

  const article2Click = () => {
    console.log('article 2 clicked');
    console.log(article2Date)
    if (newerArticle === 2){
      currScore++
      console.log('You won! score: ', currScore)
    }
    else {
      currScore = 0
      console.log('You lost')
    }
    beginGame()
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

  // Main App
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
      />
    </div>
  );
};

export default App;

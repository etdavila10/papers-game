import { useState, useEffect } from 'react';

import './App.css';
import Article from "./Article"; // React Component for displaying an article
import getArticle from './services/arxiv';

const Display = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        {props.articles.map((entry, index) => {
          return (<Article value={entry} key={index} />);
        })}
      </div>
    );
  }
};


const App = () => {
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

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arxivId, setArxivId] = useState(generateRandomArxivId());


  const generateNewArticle = () => {
    setIsLoading(true);
    setArxivId(generateRandomArxivId());
  }

  useEffect(() => {
    getArticle(arxivId)
      .then(result => {
          let convert = require('xml-js');
          let resultJson = convert.xml2js(result, {compact: true, spaces: 4}).feed.entry;
          console.log('ID that gave article below: ', arxivId);
          console.log(resultJson);
          setArticles([resultJson]);
          setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, [arxivId]);

  // Main App
  return (
    <div className="App App-header">
      <h1>Welcome to arXiv Playground</h1>
      <div className="search-bar">
        <button onClick={generateNewArticle}>Generate new article</button>
      </div>
      <Display isLoading={isLoading} articles={articles} />
    </div>
  );
};

export default App;

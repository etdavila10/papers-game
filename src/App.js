import { useState, useEffect } from 'react';

import './App.css';
import Article from "./Article"; // React Component for displaying an article

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

const CallArxivAPI = (props) => {
  const setArticles = props.setArticles;
  const setIsLoading = props.setIsLoading;

  useEffect(() => {
    const arxiv_api_url = `//export.arxiv.org/api/query?search_query=au:"${props.author}"`;
    fetch(arxiv_api_url)
      .then(res => res.text())
      .then(
        (result) => {
          let convert = require('xml-js');
          let resultJson = convert.xml2js(result, {compact: true, spaces: 4}).feed.entry;
          console.log(resultJson);
          setArticles(resultJson);
          setIsLoading(false);
      }
    ).catch(error => console.log(error))
  }, [props.author, setArticles, setIsLoading]);
  // second argument tells UseEffect if page changes then update the effect

  return null;
};

const App = () => {
  // set initial arxiv call with Richard Stanley as author
  const [author, setAuthor] = useState('Richard Stanley');
  // where the articles will be stored
  const [articles, setArticles] = useState([]);
  // check whether we are loading an api call
  const [isLoading, setIsLoading] = useState(true);

  const [inputVal, setInputVal] = useState('');

  // When button is pressed: update the author.
  // Since useEffect() depends on our author
  // this should retrigger the api call.
  const updateAuthor = () => {
    setAuthor(inputVal);
    setIsLoading(true);
  };

  // Main App
  return (
    <div className="App App-header">
      <h1>Welcome to arXiv Playground</h1>
      <div className="search-bar">
        <h2>Search for some ArXiv Articles:</h2>
        <p>Type author name:</p>
        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}></input>
        <button style={{marginLeft: '10px', padding: '10px' }} onClick={updateAuthor}>UPDATE</button>
      </div>
      <CallArxivAPI author={author} setArticles={setArticles} setIsLoading={setIsLoading} />
      <Display isLoading={isLoading} articles={articles} />
    </div>
  );
};

export default App;

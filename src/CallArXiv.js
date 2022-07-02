import React from 'react';
import Article from './Article';

// is it possible to pass this state up to App.js?
class CallArXiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://export.arxiv.org/api/query?search_query=au:\"Richard Stanley\"",
      error: null,
      isLoaded: false,
      items: {},
    };
  }

  // maybe to pass state up, we can call this and then simply pass data up instead of
  // handling it in render below. That way Article can be called straight from App.
  // Does it make more sense for Article to be a child of CallArXiv or a child of App?
  componentDidMount() {
    fetch(this.state.url)
      .then(res => res.text())
      .then(
        (result) => {
          let convert = require('xml-js');
          let result1 = convert.xml2js(result, {compact: true, spaces: 4}).feed.entry;
          this.setState({
            isLoaded: true,
            items: result1,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      console.log(items);
      return (
        <div>
          {items.map((entry, index) => {
            return <Article value={entry} key={index} />;
          })}
        </div>
      );
    }
  }
}

export default CallArXiv;
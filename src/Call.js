import React from 'react';
import Article from './Article';

// api I will be testing https://www.boredapi.com/api/activity?type=recreational
class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://export.arxiv.org/api/query?search_query=au:\"Eduardo Torres Davila\"",
      error: null,
      isLoaded: false,
      items: {},
    };
  }

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

export default Call;
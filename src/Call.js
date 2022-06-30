import React from 'react';

// api I will be testing https://www.boredapi.com/api/activity?type=recreational
class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://www.boredapi.com/api/activity?type=recreational",
      error: null,
      isLoaded: false,
      items: {},
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
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
      return (
        <div>
          {Object.keys(items).map((key, index) => {
            return (
              <div key={index}>
                <p>
                  {key}: {items[key]}
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Call;
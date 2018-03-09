import React, { Component } from 'react';

class CurrentDateTime extends Component {
  constructor (props) {
    super(props);

    this.state = {
      dateTime: new Date()
    };
  }

  componentDidMount () {
    // Code inside this method will run once the component
    // is first visible in the DOM.

    // `this.state` is not location we can data about
    // our component. The data you should store in your
    // `this.state` should impact how your component is
    // rendered which should be a minimum amount of data.
    // To store other kinds of information, you can use
    // properties of `this` as you would in a plain
    // JS object (or class).
    this.intervalId = setInterval(
      () => {
        this.setState({dateTime: new Date()})
      },
      1000
    )
  }

  componentWillUnmount () {
    // Code inside of this will run just before
    // the component is removed from the DOM.
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render () {
    return (
      <span className="CurrentDateTime">
        { this.state.dateTime.toLocaleDateString() } { this.state.dateTime.toLocaleTimeString() }
      </span>
    )
  }
}

export default CurrentDateTime;

import React from 'react';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return <h1>Привет, {this.state.date.toLocaleTimeString()}</h1>;
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}
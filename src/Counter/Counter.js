import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  counterUp = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  counterDown = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <h2>
          Counter: <strong>{this.state.counter}</strong>
        </h2>
        <button onClick={this.counterUp}>+</button>
        <button onClick={this.counterDown}>-</button>
      </div>
    );
  }
}

export default Counter;

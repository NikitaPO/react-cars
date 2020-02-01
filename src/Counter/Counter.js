import React, { Component } from "react";
import Counter2 from "../Counter2/Counter2";
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
        counter: prevState.counter - 1
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <h2>
          Counter: <strong>{this.state.counter}</strong>
        </h2>
        <div className="buttons">
          <button
            className="def-btn"
            style={{ width: "30px" }}
            onClick={this.counterUp}
          >
            +
          </button>
          <button
            className="def-btn"
            style={{ width: "30px" }}
            onClick={this.counterDown}
          >
            -
          </button>
        </div>
        <Counter2 />
      </div>
    );
  }
}

export default Counter;

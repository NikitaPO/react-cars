import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: "1px solid red", padding: "20px", color: "red" }}>
          Error, ssore
        </div>
      );
    }

    return this.props.children;
  }
}

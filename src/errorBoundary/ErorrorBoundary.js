import React, { Component } from "react";

// https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html?utm_source=reactnl&utm_medium=email
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }else{
        return this.props.children;
    }
  }
}
export default ErrorBoundary;
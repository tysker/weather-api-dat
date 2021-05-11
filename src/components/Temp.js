import React, { Component } from "react";

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToogleOn: true
    };
  }
  handleClick = () => {
    this.setState({ isToogleOn: !this.state.isToogleOn });
    console.log(this.state.isToogleOn);
    this.props.onChange(this.state.isToogleOn);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToogleOn === false ? "FAHRENHEIT" : "CELSIUS"}
        </button>
      </div>
    );
  }
}

export default Temp;

import { Component } from "react";
import "./ButtonNext.css";

class ButtonNext extends Component {
  render() {
    return (
      <button className="buttonInfo" onClick={this.props.changeUser}>
        Next
      </button>
    );
  }
}

export default ButtonNext;

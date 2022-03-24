import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "#ccc"],
    };
  }
  showColor(color) {
    return {
      backgroundColor: color,
    };
  }

  setActiveColor(color) {
    this.props.onReceive(color);
  }
  render() {
    var elementC = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className="card card-primary">
        <div className=" card-heading">
          <h3 className="card-title">Color Picker</h3>
        </div>
        <div className="card-body">{elementC}</div>
      </div>
    );
  }
}

export default ColorPicker;

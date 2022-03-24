import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorPicker from "./components/ColorPicker";
import FontSetting from "./components/FontSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

import { Button } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontsize: 16,
    };
    this.setColor = this.setColor.bind(this);
    this.setSize = this.setSize.bind(this);
  }
  setColor(color) {
    this.setState({
      color: color,
    });
  }
  setSize(value) {
    if (this.state.fontsize + value >= 8 && this.state.fontsize + value <= 36) {
      this.setState({
        fontsize: this.state.fontsize + value,
      });
    }
  }
  onReset = (value) => {
    if (value) {
      this.setState({
        fontsize: 16,
        color: "red",
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker
              color={this.state.color}
              onReceive={this.setColor}
            ></ColorPicker>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <FontSetting
              fontsize={this.state.fontsize}
              onReceiveSize={this.setSize}
            ></FontSetting>
            <Reset onReset={this.onReset}></Reset>
          </div>
          <Result
            color={this.state.color}
            fontsize={this.state.fontsize}
          ></Result>
        </div>
      </div>
    );
  }
}

export default App;

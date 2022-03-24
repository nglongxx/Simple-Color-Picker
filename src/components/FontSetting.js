import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

import { Button } from "react-bootstrap";

class FontSetting extends Component {
  setSize(value) {
    this.props.onReceiveSize(value);
  }
  render() {
    return (
      <div className="card card-primary">
        <div className=" card-heading">
          <h3 className="card-title">Size : {this.props.fontsize}px</h3>
        </div>
        <div className="card-body">
          <Button variant="success" onClick={() => this.setSize(-2)}>
            Giam
          </Button>
          &nbsp;
          <Button variant="success" onClick={() => this.setSize(+2)}>
            Tang
          </Button>
        </div>
      </div>
    );
  }
}

export default FontSetting;

import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

import { Button } from "react-bootstrap";

class Reset extends Component {
  Reset() {
    this.props.onReset(true);
  }
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => this.Reset()}
      >
        Reset
      </button>
    );
  }
}

export default Reset;

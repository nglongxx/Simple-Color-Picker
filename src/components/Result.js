import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

import { Button } from "react-bootstrap";

class Result extends Component {
  appColor = () => {
    return {
      color: this.props.color,
      fontSize: this.props.fontsize,
    };
  };
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>
          Color : {this.props.color} - Fontsize: {this.props.fontsize} px
        </p>
        <div id="content" style={this.appColor()}>
          Noi dung settings
        </div>
      </div>
    );
  }
}

export default Result;

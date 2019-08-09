import React, { Component } from "react";

import "./MonthButton.css";

export default class MonthButton extends Component {
  render() {
    return (
      <div
        className={"month-card-" + this.props.isPicked}
        onClick={this.props.pickMonth}
      >
        <div className="front-facing">
          <h1 className="month-name">{this.props.num}</h1>
        </div>
      </div>
    );
  }
}

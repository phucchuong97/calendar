import React, { Component } from "react";

import "./WeekDay.css";

export default class DailyCard extends Component {
  render() {
    const background = this.props.weekend
      ? "front-facing weekend"
      : "front-facing";
    return (
      <div className="date-card">
        <div className={background}>
          <h1 className="date-name">{this.props.dayName}</h1>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { getDateFromShortDateStringFormat } from "../utils/DateHelper";

import "../css/card.css";

export default class Daily extends Component {
  render() {
    return (
      <div className={`element-card`} onClick={this.props.pickDate}>
        <div className={`front-facing`}>
          <h1 className={`abr`}>
            {getDateFromShortDateStringFormat(this.props.date)}
          </h1>
          {this.props.isToday && <p className="istoday">Today</p>}
          {this.props.isTracked && (
            <div className="isTracked" style={{ backgroundColor: "#f15a27" }} />
          )}
          <p className={`title`}>am lich</p>
        </div>
      </div>
    );
  }
}

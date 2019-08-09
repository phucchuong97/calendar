import React, { Component } from "react";
import { getDateFromShortDateStringFormat ,getMonthFromShortDateStringFormat} from "../utils/DateHelper";

import "../css/card.css";

export default class Daily extends Component {
  render() {
    const solarDate = getDateFromShortDateStringFormat(this.props.date);
    const solarMonth =parseInt(getMonthFromShortDateStringFormat(this.props.date));
    const activeClass = this.props.month === solarMonth?"active":"inactive";
    return (
      <div className={`element-card ${activeClass}`} onClick={this.props.pickDate}>
        <div className={`front-facing`}>
          <h1 className={`abr`}>
            {solarDate}
          </h1>
          {this.props.isToday && <p className="istoday">Today</p>}
          {this.props.isTracked && (
            <div className="isTracked" style={{ backgroundColor: "#f15a27" }} />
          )}
          <p className={`title`}>{this.props.lunarDate}</p>
        </div>
      </div>
    );
  }
}

import React from "react";
import * as DateHelper from "../utils/DateHelper";
import { Button } from "antd";

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.NON_WORK = 0;
  }

  getClassCSS() {
    const month = parseInt(
      DateHelper.getMonthFromShortDateStringFormat(this.props.dateObject.date)
    );
    const todayMonth = parseInt(
      DateHelper.getMonthFromShortDateStringFormat(this.props.today)
    );
    const invalidClass = month === this.props.monthIndex + 1 ? "" : " inactive";
    const todayCSS =
      this.props.today === this.props.dateObject.date &&
      todayMonth === this.props.monthIndex + 1
        ? " today"
        : "";
    return (
      invalidClass +
      " " +
      this.props.class +
      " " +
      this.props.dateObject.status +
      " " +
      todayCSS
    );
  }

  generateID(monthIndex, date) {
    return "d" + monthIndex + date;
  }

  render() {
    if (!DateHelper.isShortDateStringFormat(this.props.dateObject.date)) {
      return (
        <span className={"date-title " + this.props.class}>
          {this.props.dateObject}
        </span>
      );
    }
    const css = this.getClassCSS();
    const date = DateHelper.getDateFromShortDateStringFormat(
      this.props.dateObject.date
    );
    const id = this.generateID(
      this.props.monthIndex,
      this.props.dateObject.date
    );

    return (
      <span className="date-component">
        <Button
          className={"date-button "+css}
          id={id}
        >
          {date}
        </Button>
      </span>
    );
  }
}

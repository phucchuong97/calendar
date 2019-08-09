import React, { Component } from "react";
import "../css/card.css";
import WeekDayCard from "../components/WeekDayCard";
import DailyCard from "../components/DailyCard";
import MonthButton from "../components/MonthButton";
import YearButton from "../components/YearButton";
import { Row, Col, Button, Icon, Spin } from "antd";
import { getArrayDayOfMonth, getLunarDaysOfMonth } from "../utils/DateHelper";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class MonthView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      lunarDays: [],
      visible: false,
      monthPicked: parseInt(this.props.match.params.month),
      yearPicked: parseInt(this.props.match.params.year)
    };
  }

  componentDidMount() {
    this.pickMonth(this.state.monthPicked);
  }

  pickMonth = async month => {
    this.state.monthPicked = month;
    const days = getArrayDayOfMonth(
      `${this.state.yearPicked}-${this.state.monthPicked}-1`
    );
    const lunarDays = getLunarDaysOfMonth(days);
    this.setState({
      days: days,
      lunarDays: lunarDays
    });
  };

  pickDate = data => {};

  checkToday = (date, month, year) => {};

  refreshMonth = () => {};

  updateYear = async param => {
    await this.setState({
      yearPicked: this.state.yearPicked + param
    });
    this.pickMonth(this.state.monthPicked);
  };

  render() {
    const listMonths = months.map((item, index) => {
      if (this.state.monthPicked === item)
        return <MonthButton isPicked="picked" num={item} key={index} />;
      else
        return (
          <Row type="flex" justify="center" key={index}>
            <MonthButton
              isPicked="unpicked"
              pickMonth={data => this.pickMonth(item)}
              num={item}
            />
          </Row>
        );
    });
    const listDays =
      this.state.days.length && this.state.lunarDays.length ? (
        this.state.days.map((weeks, weekIndex) => (
          <Row justify="start" type="flex" key={weekIndex}>
            {weeks.map((day, dayIndex) => (
              <DailyCard
                month = {this.state.monthPicked}
                date={day.date}
                key={day.date}
                lunarDate={this.state.lunarDays[weekIndex][dayIndex]}
              />
            ))}
          </Row>
        ))
      ) : (
        <Spin />
      );

    const listWeekDay = weekDays.map((item, index) => {
      const value = item === "Saturday" || item === "Sunday";
      return <WeekDayCard dayName={item} weekend={value} key={index} />;
    });

    return (
      <div className="month-container">
        <>
          <Row>
            <Row justify="center" type="flex">
              <YearButton
                yearPicked={this.state.yearPicked}
                changeYear={param => this.updateYear(param)}
              />
            </Row>
            <Row justify="center" type="flex">
              <Col md={{ span: 1, offset: 1 }}>
                <Row justify="center" align="middle" type="flex">
                  <Button>
                    <Icon type="menu" />
                  </Button>
                </Row>
              </Col>
              <Col md={{ span: 11, offset: 1 }}>
                <Row justify="start" type="flex">
                  {listWeekDay}
                </Row>
              </Col>
            </Row>

            <Row justify="center" type="flex">
              <Col md={{ span: 1, offset: 1 }} lg={{ span: 1 }}>
                {listMonths}
              </Col>
              <Col md={{ span: 11, offset: 1 }}>{listDays}</Col>
            </Row>
          </Row>
        </>
      </div>
    );
  }
}

export default MonthView;

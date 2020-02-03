import React from "react";
import Month from "../../components/Month";
import "./style.css";
import { Row ,Spin} from "antd";
import * as DateHelper from "../../utils/DateHelper";
import YearButton from "../../components/YearButton";

export default class Year extends React.Component {
  constructor(props) {
    super(props);
    this.NUM_DAY_OF_WEEK = 7;
    this.today = new Date();
    this.initOptions();
    this.todayShortString = DateHelper.getShortDateString(this.today);
    this.year = parseInt(this.props.match.params.year) || this.today.getFullYear();
    this.state = {
      yearPicked: this.year,
      yearData: null,
      value: null,
      isFiltering: false
    };
  }

  async componentWillMount() {
    this.updateYearData(this.state.yearPicked);
  }

  initOptions() {
    this.page = 1;
    this.options = [];
  }

  updateYear = async param => {
    const nextYear = this.state.yearPicked + param;
    this.updateYearData(nextYear);
    this.initOptions();
  };

  async updateYearData(curYear) {
    const drawYearData = DateHelper.getMonthsOfYear(`${curYear}-1-1`);
    this.setState({
      yearPicked: curYear,
      yearData: drawYearData
    });
  }

  render() {
    if (!this.state.yearData) return <Spin/>;
    const year = this.state.yearData.map((month, index) => {
      return (
        <Month
          year={this.state.yearPicked}
          monthIndex={index}
          key={index}
          weeks={month}
          today={this.todayShortString}
        />
      );
    });
    return (
      <>     
        <div className="year-container">
          <div className="year-chage">
            <YearButton
              yearPicked={this.state.yearPicked}
              changeYear={param => this.updateYear(param)}
            />
          </div>
          <div>
            <Row gutter={8} type="flex" justify="center">{year}</Row>
          </div>
        </div>
      </>
    );
  }
}

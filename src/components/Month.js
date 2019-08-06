import React from "react";
import "../css/month.css";
import Date from "./Date";
import { Link } from "react-router-dom";

const monthTitle = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const dateName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Week(props) {
  const SATUDAY = 5,
    SUNDAY = 6;
  const week = (
    <div className={props.class}>
      {props.week.map((date, index) => {
        const css =
          index === SATUDAY ? "satuday" : index === SUNDAY ? "sunday" : "";
        return (
          <Date
            dateObject={date}
            key={index}
            class={css}
            monthIndex={props.monthIndex}
            today={props.today}
          />
        );
      })}
    </div>
  );
  return week;
}

export default function Month(props) {
  const month = props.monthIndex + 1;
  const monthContent = props.weeks.map((week, index) => {
    return (
      <Week
        week={week}
        key={index}
        class="week-component"
        monthIndex={props.monthIndex}
        today={props.today}
      />
    );
  });
  return (
    <div className="month-component">
      <Link to={"/month/" + props.year + "/" + month} style={{ textDecoration: 'none' }}>
        <div className="month-title">{monthTitle[props.monthIndex]}</div>
      </Link>
      <Week week={dateName} class="week-title" />
      {monthContent}
    </div>
  );
}

import date_fns from "date-fns";
import lunar from "./SolarLunarCalendarHelper";

export function getArrayDayOfMonth(dateString) {
  const beginMonth = date_fns.startOfMonth(dateString);
  let beginDate = date_fns.startOfWeek(beginMonth, { weekStartsOn: 1 });
  let dayOfMonth = [[], [], [], [], [], []];
  for (let week = 0; week < 6; week++) {
    for (let dateOfWeek = 0; dateOfWeek < 7; dateOfWeek++) {
      dayOfMonth[week].push({ date: getShortDateString(beginDate) });
      beginDate = date_fns.addDays(beginDate, 1);
    }
  }
  return dayOfMonth;
}

export function getMonthsOfYear(dateString) {
  let beginMonth = date_fns.startOfYear(dateString);
  let MonthsOfYear = [];
  for (let month = 0; month < 12; month++) {
    const temp = getArrayDayOfMonth(beginMonth);
    MonthsOfYear.push(temp);
    beginMonth = date_fns.addMonths(beginMonth, 1);
  }
  return MonthsOfYear;
}

export function getShortDateString(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    date.getFullYear() +
    "-" +
    (month > 9 ? "" : "0") +
    month +
    "-" +
    (day > 9 ? "" : "0") +
    day
  );
}

export function getTimeString(date) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return (
    (hour > 9 ? "" : "0") +
    hour +
    ":" +
    (minute > 9 ? "" : "0") +
    minute +
    ":" +
    (second > 9 ? "" : "0") +
    second
  );
}

export function isShortDateStringFormat(dateString) {
  return /[\d]{4}-[\d]{1,2}-[\d]{1,2}/.test(dateString);
}

export function getDateFromShortDateStringFormat(dateString) {
  return dateString.split("-")[2];
}

export function getMonthFromShortDateStringFormat(dateString) {
  return dateString.split("-")[1];
}

export function getYearFromShortDateStringFormat(dateString) {
  return dateString.split("-")[0];
}

export function getLunarDateObjet(dateString) {
  const day = getDateFromShortDateStringFormat(dateString);
  const month = parseInt(getMonthFromShortDateStringFormat(dateString)) -1;
  const year = getYearFromShortDateStringFormat(dateString);
  return lunar.solarToLunar(new Date(year, month, day));
}

export function getLunarDaysOfMonth(daysOfMonth) {
  const LunarDays = daysOfMonth.map(week =>
    week.map(day => {
      const lunarDate = getLunarDateObjet(day.date);
      if(lunarDate.day===1 ||parseInt(getDateFromShortDateStringFormat(day.date))===1){
        return lunarDate.day+"/"+lunarDate.month;
      }
      return lunarDate.day+"";
    })
  );
  return LunarDays;
}

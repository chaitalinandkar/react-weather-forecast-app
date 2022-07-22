import React from "react";

export default function FormattedDate(props) {
  let months = [
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
    "December",
  ];
  let month = months[props.date.getMonth()]
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
 
  let hour = props.date.getHours();
  
  let minute = props.date.getMinutes();
  let suffix;
  if (hour >= 12 && minute > 0) suffix = "PM";
  else suffix = "AM";

  if (hour > 12)
    hour = hour - 12;
  
  if (hour < 10)
      hour = "0"+ hour

  if (minute < 10)
    minute = "0" + minute;

  

  return (
    <div className="FormattedDate">
      <div className="date" id="display-date">
        <strong>
          <span id="current-month">{month} </span>
        </strong>
        <strong>
          <span id="current-date">{props.date.getDate()},</span>
        </strong>
        <span id="current-year">{props.date.getFullYear()}</span>
      </div>
      <div className="day-time" id="day-time">
        <strong>
          <span className="displayed-day" id="current-day">
            {day},
          </span>
        </strong>
        <span className="time" id="current-time">
          {hour}:{minute}
        </span>
        <span className="am-pm" id="current-am-pm">
          {" "}{suffix}
        </span>
      </div>
    </div>
  );
}
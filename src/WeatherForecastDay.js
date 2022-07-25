import React from "react";

export default function WeatherForecastDay(props) {
  let date = new Date(props.forecastDay.dt*1000);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="WeatherForecastDay">
      <p className="day">{days[date.getDay()]}</p>
      <p className="temperature-5Days"></p>
        <strong>{Math.round(props.forecastDay.temp.max)}°</strong> {" "}
      {Math.round(props.forecastDay.temp.min)}°
      <div className="icon">
        <img src={props.forecastDay.weather[0].icon} className="icon" alt=""/>
      </div>
      
      <p className="details">{props.forecastDay.weather[0].description}</p>
    </div>
  );
}
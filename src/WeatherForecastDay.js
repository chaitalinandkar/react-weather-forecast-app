import React from "react";

export default function WeatherForecastDay(props) {
  let date = new Date(props.forecastDay.dt * 1000);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function weatherIcon() {
    return `http://openweathermap.org/img/wn/${props.forecastDay.weather[0].icon}@2x.png`;
  }
   
  return (
    <div className="WeatherForecastDay">
      <div className="day">{days[date.getDay()]}</div>
      <div className="temperature-5Days"></div>
        <strong>{Math.round(props.forecastDay.temp.max)}°</strong> {" "}
      {Math.round(props.forecastDay.temp.min)}°
      <div className="icon">
        <img src={weatherIcon()} className="icon" alt=""/>
      </div>
      
      <div className="details">{props.forecastDay.weather[0].description}</div>
    </div>
  );
}
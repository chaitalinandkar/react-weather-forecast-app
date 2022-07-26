import React from "react";
import "./Tooltip.css";

export default function WeatherForecastDay(props) {
  let date = new Date(props.forecastDay.dt * 1000);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function weatherIcon() {
    return `http://openweathermap.org/img/wn/${props.forecastDay.weather[0].icon}@2x.png`;
  }
   
  return (
    <div className="WeatherForecastDay">
      <div className="day">{days[date.getDay()]}</div>
      <div className="temperature-5Days tooltip">
        <strong><span >{Math.round(props.forecastDay.temp.max)}°C{" "}{" "}</span></strong>
        <span class="tooltiptext">Max Temp</span>
        
        {/* <span>{Math.round(props.forecastDay.temp.min)}°</span> */}
        {/* <span class="tooltiptext">Min Temp</span> */}
      </div>
      <div className="temperature-5Days tooltip">
        <span>{Math.round(props.forecastDay.temp.min)}°C</span>
        <span class="tooltiptext">Min Temp</span>
      </div>
      
      <div className="icon">
        <img src={weatherIcon()} className="icon" alt=""/>
      </div>
      
      <div className="details">{props.forecastDay.weather[0].description}</div>
    </div>
  );
}
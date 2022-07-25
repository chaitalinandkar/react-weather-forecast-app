import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
      <div className="WeatherInfo">
        <div className="middle-section">
          <div className="container" id="weather-container-left">
            <div className="city" id="current-city">
              {props.data.city}
            </div>
            <FormattedDate date={props.data.date} />
          </div>

          <div className="container" id="weather-container-middle">
            <div className="weather-icon">
              <img src={props.data.icon} alt="" />
            </div>
            <div className="weather-description">{props.data.description}</div>
            <div className="temperature">
            <TemperatureConversion celsius={props.data.temperature} />
            </div>
          </div>

          <div className="container" id="weather-container-right">
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="wind">Wind: {props.data.wind}mph</div>
          </div>
        </div>
      
    </div>
  );
}
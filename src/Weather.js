import React, { useState } from "react";
import { Oval } from  'react-loader-spinner'
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setweatherData] = useState({ready : false});

  function showWeather(response) {
    setweatherData({
      ready: true,
      coordinates : response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `f7dffd4359849bb28c77fa4fe304c30f`
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather)
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showCurrentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = `f7dffd4359849bb28c77fa4fe304c30f`
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showWeather)
  }
  function currentCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentPosition);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <input
              type="text"
              placeholder="Enter a city..."
              className="search-bar"
              id="search-city"
              autoComplete="off"
              onChange={updateCity}
            />
            <button
              className="search-button"
              id="search"
              type="submit"
            >
              Search
            </button>
            <button className="current-location" onClick={currentCity} >
              <i className="fa-solid fa-location-dot"></i>
              <span className="tooltiptext">Current Location</span>
            </button>
            
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <div className="footer">
        <p>
          <a
            href="https://github.com/chaitalinandkar/react-weather-forecast-app"
            className="open-source-code"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Chaitali Nandkar
        </p>
      </div>
      </div>
      
  );
  } else {
      navigator.geolocation.getCurrentPosition(showCurrentPosition);
    
    return (
      <div className="spinner-loader ">
        <Oval 
          height="150"
          width="200"
          color='red'
          ariaLabel='loading'
        />
      </div>
      
    )
  }
  
}
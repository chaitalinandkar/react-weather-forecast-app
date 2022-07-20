import React from "react";
import "./Weather.css"

export default function Weather() {
  
  return (
    <div className="Weather">
      <form >
          <div className="heading">
            <input
              type="text"
              placeholder="Enter a city..."
              className="search-bar"
              id="search-city"
              autoComplete="off"
              
            />
            <button
              className="search-button"
              id="search"
              type="submit"
            >
              Search
            </button>
            <button className="current-location" >
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </form>
        <div className="middle-section">
          <div className="container" id="weather-container-left">
            <div className="city" id="current-city">
              Santa Clara
            </div>
            <div className="date" id="display-date">
              <strong>
                <span id="current-month">July </span>
              </strong>
              <strong>
                <span id="current-date">20,</span>
              </strong>
              <span id="current-year">2022</span>
            </div>
            <div className="day-time" id="day-time">
              <strong>
                <span className="displayed-day" id="current-day">
                  Wednesday,
                </span>
              </strong>
              <span className="time" id="current-time">
                4:00
              </span>
              <span className="am-pm" id="current-am-pm">
                PM
              </span>
            </div>
          </div>

          <div className="container" id="weather-container-middle">
            <div className="weather-icon">
              <img src="" alt="" />🌤️
            </div>
            <div className="weather-description">Sunny</div>
            <div className="temperature">
              <div className="temp">
                <div className="temp-number">
                  <strong>
                    <span
                      className="current-temperature"
                      id="display-temperature"
                    >
                      31
                    </span>
                  </strong>
                </div>
              </div>
              <div className="temp">
                <div className="temp-unit">
                  &#xb0;
                  <a href="/" className="active" id="celsius-link">
                    C
                  </a>
                  |&#xb0;
                  <a href="/" id="fahrenheit-link">
                    F
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container" id="weather-container-right">
            <div className="humidity">Humidity: %</div>
            <div className="wind">Wind: mph</div>
          </div>
        </div>
        <div className="bottom-section" id="forecast"></div>
        <div className="footer">
          <p>
            <a
              href="https://github.com/chaitalinandkar/react-weather-app"
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
  )
}
import React, {useState} from "react";

export default function TemperatureConversion(props) {
  const [temp, setTemp] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setTemp("fahrenheit")
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemp("celsius")
  }
  if (temp === "celsius") {
    return (
      <div className="TemperatureConversion">
        <div className="temp-number">
          <strong>
            <span
              className="current-temperature fs-1 me-2"
              id="display-temperature"
            >
              {props.celsius}
            </span>
          </strong>
        </div>
      
        <div className="temp-unit">
          <span href="/" className="active fs-5" id="celsius-link" >
            °C
          </span>
          |
          <a href="/" id="fahrenheit-link" className="fs-5" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    )
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
      return (
        <div className="TemperatureConversion">
          <div className="temp-number">
            <strong>
              <span
                className="current-temperature fs-1 me-2"
                id="display-temperature"
              >
                {Math.round(fahrenheit)}
              </span>
            </strong>
          </div>
        
          <div className="temp-unit">
            <a href="/" className="fs-5" id="celsius-link" onClick={showCelsius}>
              °C
            </a>
            |
            <span href="/" id="fahrenheit-link" className="fs-5" >
              °F
            </span>
          </div>
        </div>
    )
    }
}

